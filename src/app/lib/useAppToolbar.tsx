import { AppRoutes } from "@/shared/const/router";
import { useRouteChange } from "@/shared/lib/router/useRouteChange";
import { ScrollTolbar } from "@/widgets/ScrollTolbar";
import { ReactElement } from "react";


export function useAppToolbar() {
    const appRoute = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollTolbar/>,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollTolbar/>,
    };

    return toolbarByAppRoute[appRoute];
}