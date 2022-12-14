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
			<path d="M9 2.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5H10v1a5 5 0 015 5v1h1a2 2 0 012 2v4a1 1 0 01-1 1H3a1 1 0 01-1-1v-4c0-1.1.9-2 2-2h1v-1a5 5 0 014-4.9V2.5zm7 9.5h-1.5a.5.5 0 01-.5-.5V10a4 4 0 00-8 0v1.5a.5.5 0 01-.5.5H4a1 1 0 00-1 1v4h5v-2a1 1 0 011-1h2a1 1 0 011 1v2h5v-4a1 1 0 00-1-1zM6 13.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zm9 0a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM8.5 9a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm3.5.5a.5.5 0 00-1 0v2a.5.5 0 001 0v-2zM9 17h2v-2H9v2z" />
		</svg>
	)
}
export default BuildingGovernmentIcon
