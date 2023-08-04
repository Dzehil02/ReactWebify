import { Country } from "@/entities/Country";
import { profileActions, profileReducer } from "./profileSlice";
import { Currency } from "@/entities/Currency";
import { updateProfileData } from "../services/updateProfileData/updateProfileData";
import { ProfileSchema } from "../types/editableProfileCardSchema";
import { ValidateProfileErrors } from "../consts/consts";

const data = {
    first: "Pit",
    lastname: "Bred",
    age: 55,
    username: "BredPit",
    country: Country.Armenia,
    city: "Florida",
    currency: Currency.USD
}

describe('profileSlice.test', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {readonly: false};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true)
        )).toEqual({ readonly: true });
    });

    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {data, form: {username: ''}};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit()
        )).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        });
    });

    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {form: {first: 'Leva'}};
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updatePofile({
                first: 'Alex'
            }),
        )).toEqual({
            form: {first: 'Alex'},
        });
    });
    
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileErrors.SERVER_ERROR]
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending
        )).toEqual({
            isLoading: true,
            validateErrors: undefined,
        });
    });

    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true
        };

        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, '')
        )).toEqual({
            isLoading: false,
            validateErrors: undefined,
            readonly: true,
            form: data,
            data,
        });
    });

})
