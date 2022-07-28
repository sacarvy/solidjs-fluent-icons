import { splitProps } from "solid-js"
function TextPositionBehindIcon(props) {
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
			<path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zm13 7h-2V9h2a.5.5 0 010 1zm-13-1h2v1h-2a.5.5 0 010-1zm5 0h3v1h-3V9zM3 15.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm4.5-7a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" />
		</svg>
	)
}
export default TextPositionBehindIcon
