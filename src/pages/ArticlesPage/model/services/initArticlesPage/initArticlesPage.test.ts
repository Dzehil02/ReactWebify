import { getQueryParams } from "@/shared/lib/url/addQueryParams/addQueryParams";

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('initArticlesPage.test', () => {

    // test('success', async () => {
    //     const thunk = new TestAsyncThunk(initArticlesPage, {
    //         articlesPage: {
    //             _inited: false,
    //             search: 'python'
    //         }
    //     });
        
    //     await thunk.callThunk();
    //     expect(thunk.dispatch).toBeCalledTimes(4);
    //     expect(fetchArticlesList).toBeCalled();
    // });

    // test('initArticlesPage not called', async () => {
    //     const thunk = new TestAsyncThunk(initArticlesPage, {
    //         articlesPage: {
    //             _inited: true,
    //         }
    //     });
        
    //     await thunk.callThunk();
    //     expect(thunk.dispatch).toBeCalledTimes(2);
    //     expect(fetchArticlesList).not.toHaveBeenCalled();
    // });

    test('test with initial query params', () => {
        jest.spyOn(window, 'location', 'get').mockReturnValue({
            ...window.location,
            search: '?abc=1&second=4',
        });

        const params = getQueryParams({
            test: undefined,
            second: '2',
        });

        expect(params).toBe('?abc=1&second=2');
    }); 

});
