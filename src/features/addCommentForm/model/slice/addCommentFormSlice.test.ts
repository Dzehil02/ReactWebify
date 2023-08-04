import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { AddCommentFormSchema } from "../types/addCommentForm";
import { addCommentFormActions, addCommentFormReducer } from "./addCommentFormSlice";

const data = {
    first: "Pit",
    lastname: "Bred",
    age: 55,
    username: "BredPit",
    country: Country.Armenia,
    city: "Florida",
    currency: Currency.USD
}

describe('addCommentFormSlice.test', () => {
    test('test set text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {text: 'comment text'};
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('comment comment')
        )).toEqual({text: 'comment comment'});
    });

    test('test empty text', () => {
        const state: DeepPartial<AddCommentFormSchema> = {text: 'comment text'};
        expect(addCommentFormReducer(
            state as AddCommentFormSchema,
            addCommentFormActions.setText('')
        )).toEqual({text: ''});
    });

})
