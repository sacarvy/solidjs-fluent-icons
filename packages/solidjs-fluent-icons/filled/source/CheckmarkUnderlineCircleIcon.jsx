import { splitProps } from "solid-js"
function CheckmarkUnderlineCircleIcon(props) {
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
			<path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.85-11.85c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L9.5 9.79l3.65-3.64c.2-.2.5-.2.7 0zM7.5 13h5a.5.5 0 010 1h-5a.5.5 0 010-1z" />
		</svg>
	)
}
export default CheckmarkUnderlineCircleIcon
