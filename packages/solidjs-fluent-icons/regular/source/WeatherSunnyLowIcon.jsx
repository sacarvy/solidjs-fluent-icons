import { splitProps } from "solid-js"
function WeatherSunnyLowIcon(props) {
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
			<path d="M5.55 10.02c0 .33.04.66.11.98H2.5a.5.5 0 000 1h15a.5.5 0 000-1h-3.1a4.5 4.5 0 00-4.36-5.47c-2.48 0-4.49 2.01-4.49 4.49zm7.83.98H6.7a3.48 3.48 0 116.68 0zm-3.35 7.01a.5.5 0 00.1-.01h-.21a.5.5 0 00.1.01zM5 4.32l.07.06.85.86A.5.5 0 015.3 6l-.07-.05-.86-.86A.5.5 0 015 4.32zm10.67.06c.17.18.2.44.06.64l-.06.07-.86.86a.5.5 0 01-.76-.64l.06-.07.85-.86c.2-.2.52-.2.71 0zm-5.65-2.36a.5.5 0 01.49.41v1.3a.5.5 0 01-.98.1l-.01-.1v-1.2c0-.28.22-.5.5-.5zM8.5 16a.5.5 0 000 1h3a.5.5 0 000-1h-3zM5 14c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9A.5.5 0 015 14z" />
		</svg>
	)
}
export default WeatherSunnyLowIcon
