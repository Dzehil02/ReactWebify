import { validateProfileData } from "./validateProfileData";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { ValidateProfileErrors } from "../../consts/consts";

const data = {
    first: "Pit",
    lastname: "Bred",
    age: 55,
    username: "BredPit",
    country: Country.Armenia,
    city: "Florida",
    currency: Currency.USD
}

describe('validateProfileData.test', () => {

    test('success', async () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test('error first and lastname', async () => {
        const result = validateProfileData({...data, first: '', lastname: ''});
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_USER_DATA]);
    });

    test('error country', async () => {
        const result = validateProfileData({...data, country: undefined});
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_COUNTRY]);
    });

    test('error age', async () => {
        const result = validateProfileData({...data, age: -1});
        expect(result).toEqual([ValidateProfileErrors.INCORRECT_AGE]);
    });

    test('error all', async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileErrors.INCORRECT_USER_DATA,
            ValidateProfileErrors.INCORRECT_AGE,
            ValidateProfileErrors.INCORRECT_COUNTRY
        ]);
    });

});
