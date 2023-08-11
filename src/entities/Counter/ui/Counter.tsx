import { useDispatch } from "react-redux"
import { Button } from "@/shared/ui/Button"
import { useCounterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { useTranslation } from "react-i18next";


export const Counter = () => {

    const dispatch = useDispatch();
    const counterValue = useCounterValue();
    const {t} = useTranslation();
    const {increment, decrement, add} = useCounterActions()

    const incrementHandler = () => {
        increment()
    }

    const decrementHandler = () => {
        decrement()
    }

    const addFiveHandler = () => {
        add(5)
    }

    return (
        <div >
            <h1 data-testid = "value-title">{counterValue}</h1>
            <Button data-testid = "increment-btn" onClick={incrementHandler}>{t('increment')}</Button>
            <Button data-testid = "decrement-btn" onClick={decrementHandler}>{t('decrement')}</Button>
            <Button data-testid = "addFive-btn" onClick={addFiveHandler}>{t('addFive')}</Button>
        </div>
    )
}