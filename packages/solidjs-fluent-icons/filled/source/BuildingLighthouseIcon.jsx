import { splitProps } from "solid-js"
function BuildingLighthouseIcon(props) {
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
			<path d="M9.25 2.07a.5.5 0 00-.5 0L5.57 3.88A1.13 1.13 0 006 6v2.2a2 2 0 00-1.15 1.59l-.79 7.11a1 1 0 001 1.11h7.88a1 1 0 001-1.11l-.8-7.11A2 2 0 0012 8.18v-.17V6a1.13 1.13 0 00.43-2.12L9.25 2.07zM11 8H7V6h4v2zm-5.48 4.88l6.76-1.8.22 1.9-7.2 1.92.22-2.02zM16.5 7h-2a.5.5 0 110-1h2a.5.5 0 010 1zm-.65-3.15a.5.5 0 10-.7-.7l-1 1a.5.5 0 00.7.7l1-1zm0 6a.5.5 0 000-.7l-1-1a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0z" />
		</svg>
	)
}
export default BuildingLighthouseIcon
