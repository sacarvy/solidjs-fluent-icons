import { splitProps } from "solid-js"
function OpenOffIcon(props) {
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
			<path d="M2.85 2.15l15 15a.5.5 0 01-.7.7l-1.48-1.48c-.54.4-1.2.63-1.92.63h-7.5A3.25 3.25 0 013 13.75v-7.5c0-.72.23-1.38.63-1.92L2.15 2.85a.5.5 0 11.7-.7zm11.73 13.14L4.71 5.42c-.13.25-.21.53-.21.83v7.5c0 .97.78 1.75 1.75 1.75h7.5c.3 0 .59-.08.83-.21zm-4.01-6.85l.99 1a.75.75 0 00.22-.16l3.72-3.72v3.19a.75.75 0 001.5 0v-5a.75.75 0 00-.75-.75h-5a.75.75 0 000 1.5h3.19l-3.72 3.72a.75.75 0 00-.15.22zm6.28 6.29l-1.35-1.35v-1.63a.75.75 0 011.5 0v2c0 .34-.05.67-.15.98zM5.27 3.15L6.62 4.5h1.63a.75.75 0 000-1.5h-2c-.34 0-.67.05-.98.15z" />
		</svg>
	)
}
export default OpenOffIcon
