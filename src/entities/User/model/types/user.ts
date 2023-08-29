import { FeatureFlags } from '@/shared/types/featureFlags';
import { UserRole } from '../consts/consts';
import { JsonSettigs } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettigs;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
