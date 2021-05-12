/// <reference types="react-scripts" />
declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "production" | "development" | "test";
		REACT_APP_STRIPE_KEY: string;
	}
}
