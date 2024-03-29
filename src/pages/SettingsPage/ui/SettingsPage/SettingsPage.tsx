import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

interface SettingsPageProps {
    className?: string;
}

const SettingsPage = memo((props: SettingsPageProps) => {
    const { t } = useTranslation();
    
    return (
        <Page>
            <VStack gap="16">
                <Text title={t('User_settings')} />
                <UiDesignSwitcher/>
            </VStack>
        </Page>
    );
});

export default SettingsPage;