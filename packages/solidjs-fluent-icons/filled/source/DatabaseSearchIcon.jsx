import { splitProps } from "solid-js"
function DatabaseSearchIcon(props) {
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
			<path d="M10 8c3.31 0 6-1.34 6-3s-2.69-3-6-3-6 1.34-6 3 2.69 3 6 3zm4.69.02c.47-.24.93-.54 1.31-.9v2.64a4.5 4.5 0 10-3.83 8.04c-.68.13-1.4.2-2.17.2-3.31 0-6-1.34-6-3V7.12c.38.36.84.66 1.31.9C6.56 8.64 8.22 9 10 9c1.78 0 3.44-.36 4.69-.98zM13.5 17c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L16.3 15.6a3.5 3.5 0 10-2.8 1.4zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
		</svg>
	)
}
export default DatabaseSearchIcon
