import { splitProps } from "solid-js"
function FontSpaceTrackingInIcon(props) {
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
			<path d="M13 12c.2 0 .38-.12.46-.32l3.5-9.02a.5.5 0 10-.93-.36L13 10.12 9.95 2.3a.5.5 0 00-.93.36l3.5 9.02c.08.2.27.32.47.32zM7.46 2.3a.5.5 0 00-.93 0l-2.34 6v.03l-1.17 3a.5.5 0 10.93.35L5.01 9h4l1.04 2.68a.5.5 0 10.93-.36L9.83 8.37a.5.5 0 00-.04-.11L7.47 2.3zM8.61 8H5.4L7 3.86 8.61 8zM6.5 13.12a.5.5 0 10-.65.76L7.14 15H3.5a.5.5 0 000 1h3.65l-1.3 1.12a.5.5 0 10.64.76l2.33-2a.5.5 0 000-.76l-2.33-2zm7.72 4.7a.5.5 0 01-.7.06l-2.34-2a.5.5 0 010-.76l2.33-2a.5.5 0 11.65.76L12.85 15h3.65a.5.5 0 010 1h-3.65l1.3 1.12c.21.18.24.5.06.7z" />
		</svg>
	)
}
export default FontSpaceTrackingInIcon
