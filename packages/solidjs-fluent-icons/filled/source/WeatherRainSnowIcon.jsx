import { splitProps } from "solid-js"
function WeatherRainSnowIcon(props) {
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
			<path d="M10 4c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0117 10.24 2.82 2.82 0 0114.13 13h-1.5a.5.5 0 11-.95 0H7.44l-1.5 2.75a.5.5 0 01-.9-.4l.03-.08L6.3 13h-.43A2.82 2.82 0 013 10.24a2.82 2.82 0 012.87-2.77h.06C6.13 5.57 7.53 4 10 4zm1.5 11a.5.5 0 110 1 .5.5 0 010-1zm-2.2-.94c.22.12.31.37.24.59l-.04.08-.56 1.01a.5.5 0 01-.68.2.49.49 0 01-.23-.59l.03-.08.56-1.01a.5.5 0 01.68-.2zm4.2-.06a.5.5 0 110 1 .5.5 0 010-1z" />
		</svg>
	)
}
export default WeatherRainSnowIcon
