import { StateSchema } from "app/providers/StoreProvider"
import { getProfileValidateErrors } from "./getProfileValidateErrors"
import { ValidateProfileErrors } from "../../types/editableProfileCardSchema"

describe('getProfileValidateErrors.test', () => {
    test('should return SERVER_ERROR and NO_DATA', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileErrors.SERVER_ERROR,
                    ValidateProfileErrors.NO_DATA,
                ]
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileErrors.SERVER_ERROR,
            ValidateProfileErrors.NO_DATA,
        ]);
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    })
})