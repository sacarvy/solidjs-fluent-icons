import { splitProps } from "solid-js"
function BuildingSkyscraperIcon(props) {
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
			<path d="M7 2.5c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5V3H7v-.5zM5.46 4a.5.5 0 00-.46.5V5h6v-.5a.5.5 0 00-.46-.5H5.46zm8.29 11a.75.75 0 100-1.5.75.75 0 000 1.5zm.75-3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5 6h6v.02c.6.34 1 .99 1 1.73V8h.5a4.5 4.5 0 014.5 4.5v4a.5.5 0 01-.5.5H9v-2.5a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5V17H4.5a.5.5 0 01-.5-.5V7.75a2 2 0 011-1.73V6zm7 10h4v-3.5A3.5 3.5 0 0012.5 9H12v7zM7.5 8.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zM7.5 11.25a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm1.75.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default BuildingSkyscraperIcon
