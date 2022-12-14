import { splitProps } from "solid-js"
function TextIndentIncreaseLtrIcon(props) {
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
			<path d="M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h6a.5.5 0 000-1h-6zM2.85 7.73a.5.5 0 10-.7.7L3.2 9.5l-1.06 1.06a.5.5 0 10.7.7l1.42-1.4a.5.5 0 000-.71L2.85 7.73z" />
		</svg>
	)
}
export default TextIndentIncreaseLtrIcon
