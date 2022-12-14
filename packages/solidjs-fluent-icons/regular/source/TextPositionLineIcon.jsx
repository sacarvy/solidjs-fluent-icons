import { splitProps } from "solid-js"
function TextPositionLineIcon(props) {
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
			<path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zm0 12a.5.5 0 000 1h13a.5.5 0 000-1h-13zm7.5-2.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm-7-4a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" />
		</svg>
	)
}
export default TextPositionLineIcon
