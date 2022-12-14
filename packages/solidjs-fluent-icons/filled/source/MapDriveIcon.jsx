import { splitProps } from "solid-js"
function MapDriveIcon(props) {
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
			<path d="M2 5c0-1.1.9-2 2-2h12a2 2 0 012 2v3.5a.5.5 0 01-.5.5h-7v2h1c.28 0 .5.22.5.5V13h1.5c.27 0 .5.22.5.5v1h3.5a.5.5 0 010 1H14v1a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-1H2.5a.5.5 0 010-1H6v-1c0-.28.23-.5.5-.5H8v-1.5a.5.5 0 01.5-.5h1V9h-7a.5.5 0 01-.5-.5V5zm12.75 1.74a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default MapDriveIcon
