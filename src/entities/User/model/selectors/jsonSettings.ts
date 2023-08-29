import { buildSelector } from '@/shared/lib/store';
import { JsonSettigs } from '../types/jsonSettings';

const defaultJsonSettings: JsonSettigs = {};

export const [useJsonSettings, getJsonSettings] = buildSelector(
    (state) => state.user.authData?.jsonSettings ?? defaultJsonSettings,
);
