import { splitProps } from "solid-js"
function TextAlignLeftRotate270Icon(props) {
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
			<path d="M4.25 18a.75.75 0 01-.75-.75V6.75a.75.75 0 011.5 0v10.5c0 .41-.34.75-.75.75zm5 0a.75.75 0 01-.75-.75V2.75a.75.75 0 011.5 0v14.5c0 .41-.34.75-.75.75zm4.25-.75a.75.75 0 001.5 0v-8.5a.75.75 0 00-1.5 0v8.5z" />
		</svg>
	)
}
export default TextAlignLeftRotate270Icon
