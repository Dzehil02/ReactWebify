import cls from './ArticleDetails.module.scss';
import { Skeleton } from "@/shared/ui/redesigned/Skeleton";
import { AppImage } from "@/shared/ui/redesigned/AppImage";
import { useSelector } from "react-redux";
import { getArticleDetailsData } from "../../model/selectors/articleDetails";
import { renderArticleBlock } from "./renderArticleBlock";
import { Text } from "@/shared/ui/redesigned/Text";


export const ArticleDetailsRedesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={<Skeleton width={'100%'} height={420} border={'16px'} />}
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleBlock)}
        </>
    );
};