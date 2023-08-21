export type { ScrollSaveSchema } from './model/types/ScrollSaveSchema';

export { getScrollByPath } from './model/selectors/scrollSaveSelector';
export {
    scrollSaveReducer,
    scrollSaveActions,
} from './model/slices/scrollSaveSlice';
