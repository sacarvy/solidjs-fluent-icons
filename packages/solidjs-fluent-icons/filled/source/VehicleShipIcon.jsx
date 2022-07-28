import { splitProps } from "solid-js"
function VehicleShipIcon(props) {
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
			<path d="M7 2.54c0-.28.22-.5.5-.5h5c.28 0 .5.22.5.5V5h2.5c.28 0 .5.22.5.5v4.06l1.63.46a.5.5 0 01.32.7l-1.82 3.79a1.5 1.5 0 00-2.53.45V15a2.28 2.28 0 01-.35.57c-.26.32-.5.44-.74.44s-.48-.13-.75-.45a2.68 2.68 0 01-.36-.6 1.5 1.5 0 00-2.81.03 2.27 2.27 0 01-.35.57c-.26.33-.5.45-.74.45s-.48-.12-.74-.44a2.61 2.61 0 01-.36-.6 1.5 1.5 0 00-2.55-.42l-1.8-3.83a.5.5 0 01.32-.7L4 9.57V5.5c0-.28.22-.5.5-.5H7V2.54zm5 .5H8V5h4V3.04zm3 6.25V6H5v3.28l4.2-1.16a3 3 0 011.6 0L15 9.29zm-3.6 5.66zm0 0zm4.09.44v-.01a.5.5 0 00-.96-.06v.02a1.62 1.62 0 01-.12.24c-.08.17-.22.39-.4.6-.35.45-.85.82-1.51.82s-1.16-.38-1.52-.82a3.64 3.64 0 01-.51-.85.5.5 0 00-.94 0 1.75 1.75 0 01-.12.25c-.09.17-.22.39-.4.6-.35.45-.85.82-1.51.82s-1.16-.37-1.52-.81a3.62 3.62 0 01-.5-.85l-.01-.02a.5.5 0 00-.96.06 1.5 1.5 0 01-.08.24c-.07.16-.17.37-.33.58-.3.41-.8.8-1.6.8a.5.5 0 000 1 2.9 2.9 0 002.54-1.4l.17.22C5.66 17.38 6.4 18 7.5 18s1.84-.62 2.3-1.18l.2-.28.2.28A2.96 2.96 0 0012.5 18a2.95 2.95 0 002.46-1.4l.14.2c.44.6 1.2 1.21 2.4 1.2a.5.5 0 100-1c-.8.01-1.3-.38-1.6-.79a2.72 2.72 0 01-.4-.77l-.01-.05z" />
		</svg>
	)
}
export default VehicleShipIcon
