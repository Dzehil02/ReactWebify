import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button as ButtonDeprecated, ButtonTheme } from '../../deprecated/Button/Button';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import CopyIconNew from '@/shared/assets/icons/copyNew.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../../redesigned/Icon';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <pre className={classNames(cls.Code, {}, [className])}>
                    <ButtonDeprecated
                        className={cls.copyBtn}
                        theme={ButtonTheme.CLEAR}
                        onClick={onCopy}
                    >
                        <CopyIcon />
                    </ButtonDeprecated>
                    <code>{text}</code>
                </pre>
            }
            on={
                <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
                    <Icon
                        clickable
                        onClick={onCopy}
                        className={cls.copyBtn}
                        Svg={CopyIconNew}
                    />
                    <code>{text}</code>
                </pre>
            }
        />
    );
});
