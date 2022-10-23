export const getRowCols = (inEditMode: boolean) => {
	return (inEditMode)
		? "grid-cols-[1fr]"
		: "grid-cols-[1fr_25px] sm:grid-cols-[1fr_35px_60px]";
}