import { splitProps } from "solid-js"
function VehicleTruckBagIcon(props) {
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
			<path d="M4 1a2 2 0 011 .27A2 2 0 018 3v1h.5c.28 0 .5.22.5.5V9a2 2 0 01-2 2H3a2 2 0 01-2-2V4.5c0-.28.22-.5.5-.5H2V3c0-1.1.9-2 2-2zM3 4h2V3a1 1 0 00-2 0v1zm3-1v1h1V3a1 1 0 00-1.25-.97A2 2 0 016 3zm3 .09V3h3.25c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 01-4.9 0h-1.1a2.5 2.5 0 01-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-2.4c.3.1.63.15.96.15h4a3 3 0 003-3V4.5c0-.65-.42-1.2-1-1.41zM14 7v3h2.7l-1.37-2.72a.5.5 0 00-.45-.28H14zm-7.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 1.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
		</svg>
	)
}
export default VehicleTruckBagIcon
