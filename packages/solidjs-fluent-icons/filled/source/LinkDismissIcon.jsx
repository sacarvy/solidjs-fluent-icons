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
			<path d="M14 4a4 4 0 013.52 5.9c-.42-.27-.87-.5-1.36-.64a2.5 2.5 0 00-2-3.75L14 5.5h-2a.75.75 0 01-.1-1.5H14zM8 4a.75.75 0 01.1 1.5H6a2.5 2.5 0 00-.16 5H8a.75.75 0 01.1 1.5H6a4 4 0 01-.2-8H8zM6.25 7.25h7.5a.75.75 0 01.1 1.5h-7.6a.75.75 0 01-.1-1.5h.1zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.73-1.06a.5.5 0 00-.7-.7l-1.07 1.05-1.06-1.06a.5.5 0 00-.7.7l1.05 1.07-1.06 1.06a.5.5 0 00.7.7l1.07-1.05 1.06 1.06a.5.5 0 00.7-.7l-1.05-1.07 1.06-1.06z" />
		</svg>
	)
}
export default LinkDismissIcon
