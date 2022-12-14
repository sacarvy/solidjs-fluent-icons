import { splitProps } from "solid-js"
function WeatherCloudyIcon(props) {
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
			<path d="M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 13.24 2.82 2.82 0 0115.13 16H6.87A2.82 2.82 0 014 13.24a2.82 2.82 0 012.87-2.77h.06C7.13 8.57 8.53 7 11 7zM8.4 4c1.45 0 2.72.83 3.34 2.04A6.05 6.05 0 0011 6C8.6 6 6.87 7.3 6.25 9.29l-.07.21-.04.19-.17.03a3.73 3.73 0 00-2.71 2.26 2.62 2.62 0 011.2-4.86h.22A3.77 3.77 0 018.39 4z" />
		</svg>
	)
}
export default WeatherCloudyIcon
