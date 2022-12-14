import { splitProps } from "solid-js"
function HandLeftIcon(props) {
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
			<path d="M11 8.5V2.75a.75.75 0 00-1.5 0V8.5a.5.5 0 01-1 0V3.75a.75.75 0 00-1.5 0v6.5a4.06 4.06 0 00-2-.75c-.97 0-1.79.32-1.98 1.12a.6.6 0 00-.02.14c0 .15.07.3.2.38l1.3.99c1.07.8 2.07 1.86 2.76 2.99.38.6.72 1.23 1.06 1.86.36.68.59 1.02 1.68 1.02h3.05c.95 0 1.31-.53 1.95-2 .64-1.47 1-2.94 1-3.5V5.25a.75.75 0 00-1.5 0V9a.5.5 0 01-1 0V3.75a.75.75 0 00-1.5 0V8.5a.5.5 0 01-1 0z" />
		</svg>
	)
}
export default HandLeftIcon
