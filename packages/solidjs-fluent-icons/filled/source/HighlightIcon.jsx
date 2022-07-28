import { splitProps } from "solid-js"
function HighlightIcon(props) {
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
			<path d="M4.5 2C3.67 2 3 2.67 3 3.5v3C3 7.33 3.67 8 4.5 8h11c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-11zM6 11a2 2 0 01-2-2h12a2 2 0 01-2 2H6zm0 1h8v1.07a2 2 0 01-1.1 1.8l-6.18 3.08A.5.5 0 016 17.5V12z" />
		</svg>
	)
}
export default HighlightIcon
