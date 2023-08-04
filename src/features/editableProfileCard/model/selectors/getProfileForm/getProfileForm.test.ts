import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileForm } from "./getProfileForm"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

describe('getProfileForm.test', () => {
    test('should return Profile Form', () => {
        const data = {
            first: "Pit",
            lastname: "Bred",
            age: 55,
            username: "BredPit",
            country: Country.Armenia,
            city: "Florida",
            currency: Currency.USD
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    })
})