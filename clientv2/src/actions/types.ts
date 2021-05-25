import { FetchUserAction } from "./fetchUsers";

export enum FetchType {
	fetchUser,
	fetchSurvey,
}

export type Action = FetchUserAction;
