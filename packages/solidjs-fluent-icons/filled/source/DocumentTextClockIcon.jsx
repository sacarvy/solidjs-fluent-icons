import { splitProps } from "solid-js"
function DocumentTextClockIcon(props) {
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
			<path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.7a5.5 5.5 0 014.66.8h4.84a.5.5 0 010 1H9.74c.26.3.48.64.66 1h3.1a.5.5 0 010 1h-2.7c.08.32.15.66.18 1h2.52a.5.5 0 010 1h-2.52a5.48 5.48 0 01-1.24 3h4.76c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm1 0V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zM5.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM5 12.5a.5.5 0 011 0V14h1a.5.5 0 010 1H5.5a.5.5 0 01-.5-.5v-2z" />
		</svg>
	)
}
export default DocumentTextClockIcon
