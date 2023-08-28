import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

export const CounterRedisegned = () => {
    const counterValue = useCounterValue();
    const { t } = useTranslation();
    const { increment, decrement, multiply, divide } = useCounterActions();

    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    const multiplyFiveHandler = () => {
        multiply(5);
    };

    const divideFiveHandler = () => {
        divide(5);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={incrementHandler}>
                {t('increment')}
            </Button>
            <Button data-testid="decrement-btn" onClick={decrementHandler}>
                {t('decrement')}
            </Button>
            <Button data-testid="multuplyFive-btn" onClick={multiplyFiveHandler}>
                {t('multiplyFive')}
            </Button>
            <Button data-testid="divieFive-btn" onClick={divideFiveHandler}>
                {t('divideFive')}
            </Button>
        </div>
    );
};
