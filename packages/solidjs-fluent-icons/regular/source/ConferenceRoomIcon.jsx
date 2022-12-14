import { splitProps } from "solid-js"
function ConferenceRoomIcon(props) {
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
			<path d="M12.49 10a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.6 2.01a.5.5 0 00-.6.5V17.5a.5.5 0 00.6.5l7-1.51A.5.5 0 0017 16V4a.5.5 0 00-.4-.49l-7-1.5zm.4 14.87V3.12l6 1.29V15.6l-6 1.28zM8 17v-1H4V4h4V3H3.5a.5.5 0 00-.5.5v13c0 .27.22.5.5.5H8z" />
		</svg>
	)
}
export default ConferenceRoomIcon
