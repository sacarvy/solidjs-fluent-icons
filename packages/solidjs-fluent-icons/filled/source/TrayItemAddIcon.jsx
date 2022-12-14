import { splitProps } from "solid-js"
function TrayItemAddIcon(props) {
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
			<path d="M12 2a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1V3a1 1 0 00-1-1h-3zm2 5.5a.5.5 0 00-1 0v5.8l-1.15-1.15a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 00-.7-.7L14 13.29V7.5zM5 11a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1v-2a1 1 0 00-1-1H5zm-2 2.5a.5.5 0 00-1 0V15c0 1.1.9 2 2 2h12a2 2 0 002-2v-1.5a.5.5 0 00-1 0V15a1 1 0 01-1 1H4a1 1 0 01-1-1v-1.5z" />
		</svg>
	)
}
export default TrayItemAddIcon
