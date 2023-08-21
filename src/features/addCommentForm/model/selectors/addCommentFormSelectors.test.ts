import { StateSchema } from '@/app/providers/StoreProvider';
import { getAddCommentFormText } from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('should return text', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'comment',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('comment');
    });

    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});
