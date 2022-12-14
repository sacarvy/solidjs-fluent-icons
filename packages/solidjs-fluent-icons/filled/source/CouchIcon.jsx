import { splitProps } from "solid-js"
function CouchIcon(props) {
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
			<path d="M4 6.5V8h.29c1.25 0 2.3.85 2.62 2h6.19c.3-1.15 1.36-2 2.61-2H16V6.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 5 4 5.67 4 6.5zM3.5 15h13c.83 0 1.5-.67 1.5-1.5v-2.68c0-1-.81-1.82-1.82-1.82h-.47c-.94 0-1.71.77-1.71 1.71 0 .16-.13.29-.29.29H6.3a.29.29 0 01-.29-.29C6 9.77 5.23 9 4.29 9h-.47C2.82 9 2 9.81 2 10.82v2.68c0 .83.67 1.5 1.5 1.5z" />
		</svg>
	)
}
export default CouchIcon
