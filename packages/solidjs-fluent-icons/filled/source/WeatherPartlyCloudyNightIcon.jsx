import { splitProps } from "solid-js"
function WeatherPartlyCloudyNightIcon(props) {
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
			<path d="M11 7c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 13.24 2.82 2.82 0 0115.13 16H6.87A2.82 2.82 0 014 13.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 8.55 8.53 7 11 7zM5.84 3a4.24 4.24 0 013.88 3.14 4.56 4.56 0 00-3.47 3.14l-.07.22-.04.19-.17.03c-.89.18-1.66.67-2.2 1.36l-.28-.15A4.24 4.24 0 012.1 9.66a.63.63 0 01.3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78z" />
		</svg>
	)
}
export default WeatherPartlyCloudyNightIcon
