import { LOCAL_STORAGE_LAST_THEME_KEY } from "@/shared/const/localstorage";
import { FeatureFlags } from "@/shared/types/featureFlags";

const defaultFeatureFlags : FeatureFlags = {
    isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_THEME_KEY) === 'new'
};

// ФИЧИ НЕ МЕНЯЮТСЯ В ХОДЕ СЕССИИ !!!
let featureFlags : FeatureFlags = {
    ...defaultFeatureFlags,
};

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
    if (newFeatureFlags) {
        featureFlags = newFeatureFlags;
    }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
    return featureFlags?.[flag];
}

export function getAllFeatureFlags() {
    return featureFlags;
}