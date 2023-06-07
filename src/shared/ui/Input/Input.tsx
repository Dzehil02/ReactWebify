import { InputHTMLAttributes, memo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) =>  {

    const  {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        readonly,
        ...otherProps
    } = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const mods: Mods = {
        [cls.readonly]: readonly,
    }

    return(
        <div className={classNames(cls.Input, mods, [className])}>
            <input 
                className={classNames(cls.InputWidth, {}, [className])}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChangeHandler}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    )})
