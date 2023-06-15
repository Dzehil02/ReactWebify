import { fetchProfileData } from "./fetchProfileData";
import { TestAsyncThunk } from "shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
    first: "Pit",
    lastname: "Bred",
    age: 55,
    username: "BredPit",
    country: Country.Armenia,
    city: "Florida",
    currency: Currency.USD
}

describe('fetchProfileData.test', () => {

    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data}));
        const result = await thunk.callThunk()

        console.log(Promise.resolve({data}))
        
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error ', async () => {
        
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk()
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
