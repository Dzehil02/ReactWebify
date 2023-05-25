import { DeepPartial } from "@reduxjs/toolkit";
import { Decorator } from "@storybook/react";
import { StoreProvider } from "app/providers/StoreProvider";
import { StateSchema } from "app/providers/StoreProvider";

export const StoreDecorator =
    (state: DeepPartial<StateSchema>): Decorator =>
        (Story) =>
            <StoreProvider initialState={state}>
                <Story />
            </StoreProvider>;
