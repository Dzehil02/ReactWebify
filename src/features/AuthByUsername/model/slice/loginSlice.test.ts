import { loginActions, loginReducer } from './loginSlice';
import { LoginSchema } from '../types/loginSchema';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = { username: 'Alex' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('Maksim'),
            ),
        ).toEqual({ username: 'Maksim' });
    });
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '4321' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('1234'),
            ),
        ).toEqual({ password: '1234' });
    });
});
