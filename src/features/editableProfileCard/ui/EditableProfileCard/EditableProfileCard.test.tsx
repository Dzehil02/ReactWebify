import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { EditableProfileCard } from "./EditableProfileCard";
import { Profile } from "entities/Profile";
import { Currency } from "entities/Currency";
import { Country } from "entities/Country";
import { profileReducer } from "../../model/slice/profileSlice";
import { screen } from "@testing-library/react";
import  userEvent  from "@testing-library/user-event";
import { $api } from "shared/api/api";

const profile: Profile = {
    id: '1',
    first: 'Leo',
    lastname: 'Messi',
    age: 34,
    currency: Currency.EUR,
    country: Country.France,
    city: 'Paris',
    username: 'leoleo'
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1'
            }
        }
    },
    asyncReducers: {
        profile: profileReducer
    },
}

describe('features/EditableProfileCard', () => {
    
    test('Readonly режим должен переключиться', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument();
    });
    
    test('При нажатии на cancel все значения обнуляются', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'));

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
        await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user2')

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('user')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user2')

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Leo')
        expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('Messi')
    });
    
    test('При нажатии на save должна быть ошибка', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));

        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });
    
    test('На сервер должен уйти PUT запрос', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'));
        
        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'user')
        await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
