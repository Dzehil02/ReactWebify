import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useSelector } from 'react-redux';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Card max padding="24" border="partial">
                <HStack
                    data-testid="AddCommentForm"
                    justify={'between'}
                    gap="16"
                    max
                    className={classNames(cls.AddCommentFormRedesigned, {}, [
                        className,
                    ])}
                >
                    <Input
                        className={cls.input}
                        placeholder={t('Enter comment')}
                        value={text}
                        onChange={onCommentTextChange}
                        data-testid="AddCommentForm.Input"
                    />
                    <Button
                        data-testid="AddCommentForm.Button"
                        onClick={onSendHandler}
                    >
                        {t('Send comment')}
                    </Button>
                </HStack>
            </Card>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
