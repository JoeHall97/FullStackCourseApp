import { FetchUserAction } from "./fetchUsers";

export enum FetchType {
	fetchUser,
	fetchTokens,
	fetchSurvey,
}

export type Action = FetchUserAction;
