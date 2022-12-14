import { splitProps } from "solid-js"
function VehicleTruckCubeIcon(props) {
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
			<path d="M2.04 9.89v4.36c0 .97.79 1.75 1.75 1.75h.26a2.5 2.5 0 004.9 0h1.1a2.5 2.5 0 004.9 0h1.55c.83 0 1.5-.67 1.5-1.5v-3.76c0-.24-.05-.47-.16-.67l-1.62-3.24A1.5 1.5 0 0014.88 6H14V4.75C14 3.78 13.22 3 12.25 3h-2.1a2 2 0 01.35 1.12v3.76a2 2 0 01-1.1 1.8l-3 1.5a2 2 0 01-1.8 0l-2.56-1.3zM14 7h.88c.2 0 .36.1.45.28L16.69 10H14V7zm-7.5 7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm4.5 1.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM1.5 4.12v3.76a1 1 0 00.55.9l3 1.5a1 1 0 00.9 0l3-1.5a1 1 0 00.55-.9V4.12a1 1 0 00-.55-.9l-3-1.5a1 1 0 00-.9 0l-3 1.5a1 1 0 00-.55.9zm1.7-.08l2.3.97 2.3-.97a.5.5 0 01.4.92L6 5.9V8.5a.5.5 0 11-1 0V5.89l-2.2-.93a.5.5 0 11.4-.92z" />
		</svg>
	)
}
export default VehicleTruckCubeIcon
