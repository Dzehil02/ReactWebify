import { UserRole } from "@/entities/User";
import { RouteObject } from "react-router-dom";

// У Улби тут реализован тип AppRoutesProps для авторизованного пользователя, чтобы показывать страницу Профиля

export type AppRoutesProps = RouteObj & {
    authOnly?: boolean;
};

export interface RouteObj extends RouteObject {
    authOnly?: boolean;
    roles?: UserRole[];
}
