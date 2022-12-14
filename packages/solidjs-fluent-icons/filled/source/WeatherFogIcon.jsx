import { splitProps } from "solid-js"
function WeatherFogIcon(props) {
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
			<path d="M6.5 15h7a.5.5 0 01.09 1H6.5a.5.5 0 01-.09-1h.09zm-2-2h11c.27 0 .5.22.5.5a.5.5 0 01-.41.5H4.5a.5.5 0 01-.5-.5.5.5 0 01.41-.5h.1zM10 3c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0117 9.24 2.82 2.82 0 0114.13 12H5.87A2.82 2.82 0 013 9.24c0-1.47 1.2-2.67 2.7-2.76h.23C6.13 4.55 7.53 3 10 3z" />
		</svg>
	)
}
export default WeatherFogIcon
