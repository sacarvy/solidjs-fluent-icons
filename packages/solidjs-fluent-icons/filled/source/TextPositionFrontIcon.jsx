import { splitProps } from "solid-js"
function TextPositionFrontIcon(props) {
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
			<path d="M2.75 3.5c0-.41.34-.75.75-.75h13a.75.75 0 010 1.5h-13a.75.75 0 01-.75-.75zM10 6.25c-.98 0-1.81.63-2.12 1.5H6.33a3.75 3.75 0 017.35 0h-1.56A2.25 2.25 0 0010 6.25zm-3.75 5h1.5v2.25a.75.75 0 01-1.5 0v-2.25zm7.5 0h-1.5v2.25a.75.75 0 001.5 0v-2.25zM3.5 14.75a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13zm0-6a.75.75 0 000 1.5h13a.75.75 0 000-1.5h-13z" />
		</svg>
	)
}
export default TextPositionFrontIcon
