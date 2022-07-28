import { splitProps } from "solid-js"
function TextLineSpacingIcon(props) {
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
			<path d="M15 3.7v4.8a.5.5 0 001 0V3.7l1.15 1.15a.5.5 0 00.7-.7l-2-2a.5.5 0 00-.7 0l-2 2a.5.5 0 00.7.7L15 3.71zM2 4.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h6a.5.5 0 000-1h-6zM15 16.3v-4.8a.5.5 0 011 0v4.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L15 16.29z" />
		</svg>
	)
}
export default TextLineSpacingIcon
