import { splitProps } from "solid-js"
function BorderTopIcon(props) {
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
			<path d="M11.5 17a.5.5 0 000-1h-3a.5.5 0 000 1h3zm2.96-1.05a2 2 0 001.5-1.55.5.5 0 01.59-.4.5.5 0 01.38.66 3 3 0 01-2.34 2.29.5.5 0 01-.6-.4.5.5 0 01.47-.6zm2.47-10.61a.5.5 0 11-.98.2A2 2 0 0014 4H6a2 2 0 00-1.95 1.6.5.5 0 01-.6.4.5.5 0 01-.38-.66A3 3 0 016 3h8a3 3 0 012.93 2.34zM5.4 16.94a3 3 0 01-2.36-2.36.5.5 0 01.4-.58.5.5 0 01.6.46 2 2 0 001.55 1.5.5.5 0 01.4.59.5.5 0 01-.59.4zM3.5 8c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5zm13.5.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3z" />
		</svg>
	)
}
export default BorderTopIcon
