import { splitProps } from "solid-js"
function BuildingMultipleIcon(props) {
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
			<path d="M4 2a2 2 0 00-2 2v13a1 1 0 001 1h7.5a.5.5 0 00.5-.5v-2c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v2c0 .28.22.5.5.5H17a1 1 0 001-1V7a2 2 0 00-2-2h-4V4a2 2 0 00-2-2H4zm7 3h-1a2 2 0 00-2 2v10H3V4a1 1 0 011-1h6a1 1 0 011 1v1zM5.25 9.5a.75.75 0 100-1.5.75.75 0 000 1.5zM6 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 9.75a.75.75 0 100-1.5.75.75 0 000 1.5zM6 11.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm5.25-2.25a.75.75 0 110-1.5.75.75 0 010 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.75-2.25a.75.75 0 110-1.5.75.75 0 010 1.5zm.75 2.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
		</svg>
	)
}
export default BuildingMultipleIcon
