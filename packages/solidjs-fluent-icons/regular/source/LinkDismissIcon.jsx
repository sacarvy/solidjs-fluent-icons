import { splitProps } from "solid-js"
function LinkDismissIcon(props) {
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
			<path d="M8 4a.5.5 0 01.09 1H6a3 3 0 00-.2 6H8a.5.5 0 01.09 1H6a4 4 0 01-.22-8H8zm6 0a4 4 0 013.52 5.9 5.49 5.49 0 00-.88-.47 3 3 0 00-2.44-4.42L14 5h-2a.5.5 0 01-.09-1H14zM6 7.5h8a.5.5 0 01.09 1H6a.5.5 0 01-.09-1H6zm13 7a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.73-1.06a.5.5 0 00-.7-.7l-1.07 1.05-1.06-1.06a.5.5 0 00-.7.7l1.05 1.07-1.06 1.06a.5.5 0 00.7.7l1.07-1.05 1.06 1.06a.5.5 0 00.7-.7l-1.05-1.07 1.06-1.06z" />
		</svg>
	)
}
export default LinkDismissIcon
