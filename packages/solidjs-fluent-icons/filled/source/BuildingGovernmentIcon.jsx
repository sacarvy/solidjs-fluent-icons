import { splitProps } from "solid-js"
function BuildingGovernmentIcon(props) {
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
			<path d="M9.5 2a.5.5 0 00-.5.5v2.6A5 5 0 005 10v1H4a2 2 0 00-2 2v4a1 1 0 001 1h4.5a.5.5 0 00.5-.5v-2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2c0 .28.22.5.5.5H17a1 1 0 001-1v-4a2 2 0 00-2-2h-1v-1a5 5 0 00-5-5V4h2.5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3zM6 13.5v2a.5.5 0 01-1 0v-2a.5.5 0 011 0zm8.5-.5c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5zM9 9.5v2a.5.5 0 01-1 0v-2a.5.5 0 011 0zm2.5-.5c.28 0 .5.22.5.5v2a.5.5 0 01-1 0v-2c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default BuildingGovernmentIcon
