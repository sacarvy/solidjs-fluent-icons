import { splitProps } from "solid-js"
function ScreenSearchIcon(props) {
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
			<path d="M2 6.75A2.75 2.75 0 014.75 4h10.5A2.75 2.75 0 0118 6.75v6.5A2.75 2.75 0 0115.25 16h-5.13l-1-1h6.13c.97 0 1.75-.78 1.75-1.75v-6.5C17 5.78 16.22 5 15.25 5H4.75C3.78 5 3 5.78 3 6.75v1.5c-.36.13-.7.3-1 .5v-2zM4.5 16c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L7.3 14.6A3.5 3.5 0 104.5 16zm0-1a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
		</svg>
	)
}
export default ScreenSearchIcon
