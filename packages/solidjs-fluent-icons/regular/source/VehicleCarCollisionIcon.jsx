import { splitProps } from "solid-js"
function VehicleCarCollisionIcon(props) {
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
			<path d="M9.36 2.02a.5.5 0 01.56.2l1.72 2.59 2.58-1.73a.5.5 0 01.77.54L14.14 7h3.36a.5.5 0 01.35.85l-2.57 2.57 2.5 1.66a.5.5 0 01-.28.92h-3a.5.5 0 110-1h1.35l-1.63-1.08a.5.5 0 01-.07-.77L16.29 8H13.5a.5.5 0 01-.49-.62l.7-2.75-1.93 1.29a.5.5 0 01-.7-.14L10 4.15V5.5a.5.5 0 01-1 0v-3a.5.5 0 01.36-.48zM4.75 14.5a.75.75 0 100-1.5.75.75 0 000 1.5zm6.25-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 11c.6.46 1 1.18 1 2v4a1 1 0 11-2 0v-.5H4v.5a1 1 0 11-2 0v-4c0-.82.4-1.54 1-2h-.5a.5.5 0 110-1h.66l.14-.83A2 2 0 015.27 7.5h4.46a2 2 0 011.97 1.67l.14.83h.66a.5.5 0 010 1H12zM5.27 8.5a1 1 0 00-.99.84l-.2 1.2c.14-.03.28-.04.42-.04h6l.42.03-.2-1.2a1 1 0 00-1-.83H5.28zM3 13v2.5h9V13c0-.83-.67-1.5-1.5-1.5h-6c-.83 0-1.5.67-1.5 1.5z" />
		</svg>
	)
}
export default VehicleCarCollisionIcon
