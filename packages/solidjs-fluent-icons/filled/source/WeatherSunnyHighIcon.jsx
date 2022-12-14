import { splitProps } from "solid-js"
function WeatherSunnyHighIcon(props) {
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
			<path d="M9.5 3.5v-1a.5.5 0 011 0v1a.5.5 0 01-1 0zM7 8a3 3 0 116 0 3 3 0 01-6 0zm2.5 4.5v1a.5.5 0 001 0v-1a.5.5 0 00-1 0zM4.5 8a.5.5 0 000 1h1a.5.5 0 000-1h-1zm11 1h-1a.5.5 0 010-1h1a.5.5 0 010 1zM6.15 5.85a.5.5 0 10.7-.7l-1-1a.5.5 0 10-.7.7l1 1zm.7 5.3a.5.5 0 00-.7 0l-1 1a.5.5 0 10.7.7l1-1a.5.5 0 000-.7zm7-5.3a.5.5 0 01-.7-.7l1-1a.5.5 0 01.7.7l-1 1zm-.7 5.3c.2-.2.5-.2.7 0l1 1a.5.5 0 01-.7.7l-1-1a.5.5 0 010-.7zm-7.02 5.3C7.18 16.2 8.46 16 10 16c1.67 0 3.05.23 4.13.53a11.17 11.17 0 013.02 1.33l.03.03a.5.5 0 00.63-.78l-.02-.02-.04-.03a4.8 4.8 0 00-.82-.5c-.57-.31-1.42-.7-2.53-1A16.57 16.57 0 0010 15c-1.62 0-3 .2-4.11.49a12.46 12.46 0 00-3.45 1.44 4.84 4.84 0 00-.23.16l-.01.01h-.01v.01a.5.5 0 00.62.78 1.6 1.6 0 01.19-.13 11.45 11.45 0 013.14-1.3z" />
		</svg>
	)
}
export default WeatherSunnyHighIcon
