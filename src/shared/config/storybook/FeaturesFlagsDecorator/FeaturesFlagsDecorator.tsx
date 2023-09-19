import { setFeatureFlags } from "@/shared/lib/features";
import { FeatureFlags } from "@/shared/types/featureFlags";
import { Decorator } from "@storybook/react";


export const FeaturesFlagsDecorator = (features: FeatureFlags): Decorator => (Story) => {
    setFeatureFlags(features);
    
    return Story()
}
