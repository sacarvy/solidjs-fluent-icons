import { splitProps } from "solid-js"
function VehicleTruckProfileIcon(props) {
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
			<path d="M2.04 4.75C2.04 3.78 2.83 3 3.8 3h8.46c.97 0 1.75.78 1.75 1.75V6h.88c.57 0 1.09.32 1.34.83l1.62 3.24c.1.2.16.43.16.67v3.76c0 .83-.67 1.5-1.5 1.5h-1.55a2.5 2.5 0 01-4.9 0h-1.1a2.5 2.5 0 01-4.9 0H3.8c-.96 0-1.75-.78-1.75-1.75v-9.5zM14 7v3h2.7l-1.37-2.72a.5.5 0 00-.45-.28H14zm-7.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm4.5 1.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0z" />
		</svg>
	)
}
export default VehicleTruckProfileIcon
