import { splitProps } from "solid-js"
function TextColorIcon(props) {
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
			<path d="M10.46 2.31a.5.5 0 00-.92 0l-3 7.5a.5.5 0 10.92.38L8.54 7.5h2.92l1.08 2.69a.5.5 0 10.92-.38l-3-7.5zM10 3.85l1.06 2.65H8.94L10 3.85zM4.5 12c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11z" />
		</svg>
	)
}
export default TextColorIcon
