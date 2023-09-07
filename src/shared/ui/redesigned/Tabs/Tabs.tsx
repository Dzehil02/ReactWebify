import { ReactNode, memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Tabs.module.scss';
import { Card } from '../Card/Card';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    value: string;
    onTabClick: (tab: TabItem) => void;
    direction?: FlexDirection;
}

export const Tabs = memo((props: TabsProps) => {
    const { className, tabs, onTabClick, value, direction = 'row', ...otherProps } = props;

    const clickHandle = useCallback(
        (tab: TabItem) => () => {
            onTabClick(tab);
        },
        [onTabClick],
    );

    return (
        <Flex direction={direction} align='start' className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((tab) => {
                const isSelected = tab.value === value;
                return (
                <Card
                    data-testid={`Card.${tab.value}`}
                    key={tab.value}
                    className={cls.tab}
                    variant={isSelected ? 'light' : 'normal' }
                    onClick={clickHandle(tab)}
                    border='round'
                    {...otherProps}
                >
                    {tab.content}
                </Card>
            )})}
        </Flex>
    );
});
