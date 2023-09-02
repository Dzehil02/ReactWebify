import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/deprecated/Text';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            <div>
                <div>{t('main-page')}</div>
                <div style={{margin: "40px"}}>
                    <Text text={t('canTestApp')} />
                    <Text title={t('testLogin')} />
                    <Text title={t('testPassword')} />
                </div>
            </div>
        </Page>
    );
};

export default MainPage;
