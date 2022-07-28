import { splitProps } from "solid-js"
function CallForwardIcon(props) {
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
			<path d="M9.29 2.2l-.85-.16a2.53 2.53 0 00-2.32.81C4.7 4.42 4 6.87 4 10.2c0 3.32.72 5.7 2.13 7.12.6.6 1.5.83 2.34.58l.84-.25c.8-.23 1.33-1 1.24-1.82l-.17-1.63a1.53 1.53 0 00-1.26-1.36l-1.8-.32a6.36 6.36 0 01-.16-4.98l1.93-.5c.7-.19 1.21-.8 1.28-1.5l.17-1.65a1.54 1.54 0 00-1.25-1.7zm5.06 3.45a.5.5 0 00-.7.7L16.29 9H10.5a.5.5 0 000 1h5.8l-2.65 2.65a.5.5 0 00.7.7l3.5-3.5a.5.5 0 000-.7l-3.5-3.5z" />
		</svg>
	)
}
export default CallForwardIcon
