import { splitProps } from "solid-js"
function InfoShieldIcon(props) {
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
			<path d="M17 9a8 8 0 10-6.28 7.81 7.05 7.05 0 01-.72-2.93v-2.79c0-.75.59-1.42 1.4-1.42.9 0 1.76-.37 2.6-1.24a1.39 1.39 0 012 0 5.06 5.06 0 001 .8V9zM8.5 7.91a.5.5 0 011 0V12.6a.5.5 0 01-1 0V7.9zm-.25-2.16a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm8.75 4.6a4.63 4.63 0 01-1-.59c-.24-.18-.48-.4-.72-.64a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.77c.03.8.18 1.51.44 2.15A4.81 4.81 0 0013 18c.52.4 1.15.73 1.87.98.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4V11a.4.4 0 00-.4-.33 4.24 4.24 0 01-1.6-.32z" />
		</svg>
	)
}
export default InfoShieldIcon
