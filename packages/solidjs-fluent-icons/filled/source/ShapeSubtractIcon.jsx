import { splitProps } from "solid-js"
function ShapeSubtractIcon(props) {
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
			<path d="M4.5 2A2.5 2.5 0 002 4.5v6A2.5 2.5 0 004.5 13H7v2.5A2.5 2.5 0 009.5 18h6a2.5 2.5 0 002.5-2.5v-6A2.5 2.5 0 0015.5 7H13V4.5A2.5 2.5 0 0010.5 2h-6zM8 9.5C8 8.67 8.67 8 9.5 8h6c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 018 15.5v-6z" />
		</svg>
	)
}
export default ShapeSubtractIcon
