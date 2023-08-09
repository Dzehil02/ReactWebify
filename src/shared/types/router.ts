// eslint-disable-next-line webify-plugin/layer-imports
import { UserRole } from "@/entities/User";
import { RouteObject } from "react-router-dom";

export type AppRoutesProps = RouteObj & {
    authOnly?: boolean;
};

export interface RouteObj extends RouteObject {
    authOnly?: boolean;
    roles?: UserRole[];
}
