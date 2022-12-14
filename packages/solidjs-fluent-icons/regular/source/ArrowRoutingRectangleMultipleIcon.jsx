import { splitProps } from "solid-js"
function ArrowRoutingRectangleMultipleIcon(props) {
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
			<path d="M14.85 2.15a.5.5 0 00-.7.7L16.29 5H11.5A2.5 2.5 0 009 7.5v6c0 .83-.67 1.5-1.5 1.5h-.55a2.5 2.5 0 100 1h.55a2.5 2.5 0 002.5-2.5v-6c0-.83.67-1.5 1.5-1.5h4.8l-2.15 2.15a.5.5 0 00.7.7l3-3a.5.5 0 000-.7l-3-3zM6 15.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm5-3c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-4zm8 2a.5.5 0 00-1 0V17a1 1 0 01-1 1h-3.5a.5.5 0 000 1H17a2 2 0 002-2v-2.5z" />
		</svg>
	)
}
export default ArrowRoutingRectangleMultipleIcon
