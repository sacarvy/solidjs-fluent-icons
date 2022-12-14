import { splitProps } from "solid-js"
function PositionToBackIcon(props) {
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
			<path d="M12 14c0-1.1.9-2 2-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zm2-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3zM5 9v3.5A2.5 2.5 0 007.5 15H11v-1H9.7l1.67-1.66c.23-.4.57-.74.97-.97L14 9.7V11h1V7.5A2.5 2.5 0 0012.5 5H9v1h1.3L8.62 7.66c-.23.4-.57.74-.97.97L6 10.3V9H5zm6.7-3h.8c.23 0 .45.05.65.15l-7 7A1.5 1.5 0 016 12.5v-.8L11.7 6zm-4.2 8a1.5 1.5 0 01-.65-.15l7-7c.1.2.15.42.15.65v.8L8.3 14h-.8zM1 3c0-1.1.9-2 2-2h3a2 2 0 012 2v3a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1H3z" />
		</svg>
	)
}
export default PositionToBackIcon
