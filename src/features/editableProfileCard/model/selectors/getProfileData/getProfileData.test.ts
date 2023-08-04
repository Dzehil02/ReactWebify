import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

describe('getProfileData.test', () => {
    test('should return Profile Data', () => {
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
                data
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data);
    })

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    })
})