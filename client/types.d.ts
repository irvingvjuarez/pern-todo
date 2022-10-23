import React from "react";

export interface IRowContext {
	id: number;
	isInEditMode: boolean;
}

export interface RowState extends IRowContext {
	dispatch: React.Dispatch<any> | null
}

export type Action = {
	type: string;
	payload: any
}