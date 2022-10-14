interface PageContainerProps {
	children: JSX.Element
}

export const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
	return(
		<section className="w-full max-w-[1200px] my-0 mx-auto text-center">
			{children}
		</section>
	)
}