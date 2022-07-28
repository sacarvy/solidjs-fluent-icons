import { splitProps } from "solid-js"
function DockIcon(props) {
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
			<path d="M10.35 3.15a.5.5 0 00-.7 0l-3 3a.5.5 0 10.7.7L9.5 4.71v7.79a.5.5 0 001 0V4.7l2.15 2.15a.5.5 0 00.7-.7l-3-3zM3 10.5C3 9.67 3.67 9 4.5 9h3a.5.5 0 000-1h-3A2.5 2.5 0 002 10.5v3A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-3A2.5 2.5 0 0015.5 8h-3a.5.5 0 000 1h3c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 13.5v-3z" />
		</svg>
	)
}
export default DockIcon
