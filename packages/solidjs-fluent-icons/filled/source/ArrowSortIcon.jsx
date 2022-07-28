import { splitProps } from "solid-js"
function ArrowSortIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			shape-rendering="geometricPrecision"
			fill="currentColor"
			aria-hidden="true"
			preserveAspectRatio="xMidYMid meet"
			style={
				typeof props?.style === "string"
					? `display:${props?.hidden ? "none" : "block"}` + ";" + props.style
					: { display: props?.hidden ? "none" : "block", ...props?.style }
			}
			ref={props.ref}
			{...others}
		>
			<path d="M14.84 16.72a.76.76 0 01-.59.28.73.73 0 01-.53-.22l-3-3a.75.75 0 011.06-1.07l1.72 1.73V3.75a.75.75 0 011.5 0v10.68l1.72-1.71a.75.75 0 111.06 1.06l-2.94 2.94zM6.34 3.28A.76.76 0 005.75 3c-.2 0-.38.07-.53.22l-3 3A.75.75 0 003.28 7.3L5 5.56v10.69a.75.75 0 001.5 0V5.57l1.72 1.71a.75.75 0 101.06-1.06L6.34 3.28z" />
		</svg>
	)
}
export default ArrowSortIcon
