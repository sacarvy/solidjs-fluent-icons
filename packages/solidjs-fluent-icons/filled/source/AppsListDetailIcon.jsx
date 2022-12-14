import { splitProps } from "solid-js"
function AppsListDetailIcon(props) {
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
			<path d="M3.5 4C2.67 4 2 4.67 2 5.5v2C2 8.33 2.67 9 3.5 9h2C6.33 9 7 8.33 7 7.5v-2C7 4.67 6.33 4 5.5 4h-2zm6 1a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6zm-6 4c-.83 0-1.5.67-1.5 1.5v2c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2zm6 1a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 2a.5.5 0 000 1h6a.5.5 0 000-1h-6z" />
		</svg>
	)
}
export default AppsListDetailIcon
