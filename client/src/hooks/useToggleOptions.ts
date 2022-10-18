import { useRef, useState } from "react"

export const useToggleOptions = () => {
	const menuRef = useRef<HTMLUListElement | null>(null)
	const [open, setOpen] = useState(false)
	const toggleOpen = () => setOpen(prev => {
		if (!prev) {
			setTimeout(() => {
				menuRef.current?.focus()
			}, 0)
		}
		return !prev
	})
	const handleClick = (evt: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		evt.stopPropagation()
		toggleOpen()
	}

	return {
		open,
		handleClick,
		toggleOpen,
		menuRef
	}
}