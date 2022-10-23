import React, { Dispatch } from "react";
import { rowContext as RowContext } from "../contexts/taskContext";
import { useRow } from "../hooks/useRow";
import { ConditionalNode } from "../components/ConditionalNode"
import { getRowCols } from "../services/getRowCols"
import { StandardRow } from "../views/StandardRow"
import { HeaderRow } from "../views/HeaderRow"

interface RowProps {
	content: string;
	id?: number;
	variant?: "header" | "standard"
}

export const Row: React.FC<RowProps> = ({ content, id, variant = "standard" }) => {
	const { rowState } = useRow(id || NaN)
	const { isInEditMode, dispatch } = rowState

	return (
		<RowContext.Provider value={rowState}>
			<div className={`row ${getRowCols(isInEditMode)}`}>
				<ConditionalNode condition={variant === "standard"}>
					<StandardRow
						rowId={Number(id)}
						content={content}
						editMode={isInEditMode}
						dispatch={dispatch as Dispatch<any>}
					/>
				</ConditionalNode>

				<ConditionalNode condition={variant === "header"}>
					<HeaderRow content={content} />
				</ConditionalNode>
			</div>
		</RowContext.Provider>
	)
}