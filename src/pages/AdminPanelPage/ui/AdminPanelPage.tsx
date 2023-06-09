import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {className} = props;
    const { t } = useTranslation('admin-panel')

    return (
        <Page className={classNames('', {}, [className])}>
            {t('admin-panel')}
        </Page>
    );
});

export default AdminPanelPage;