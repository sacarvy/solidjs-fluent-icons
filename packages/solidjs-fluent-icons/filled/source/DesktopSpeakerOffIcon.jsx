import { splitProps } from "solid-js"
function DesktopSpeakerOffIcon(props) {
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
			<path d="M2.15 2.85a.5.5 0 01.7-.7l15 15a.5.5 0 01-.7.7L14 14.71v2.79a.5.5 0 01-.85.35L11.29 16h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l.5-.5-.71-.7-.21.2h-.38c-.83 0-1.5.67-1.5 1.5V15H8v2h2.88l1 1H5.5a.5.5 0 010-1H7v-2H3.5A1.5 1.5 0 012 13.5v-10c0-.23.05-.45.15-.65zM18.5 14.5a7.4 7.4 0 01-.19 1.7l-.86-.87a6.95 6.95 0 00-.3-2.9c-.08-.24-.17-.41-.23-.52l-.07-.11a.5.5 0 01.8-.6c.12.16.29.45.44.87.26.68.41 1.5.41 2.43zm-2.28-1.53c.16.47.26.95.28 1.4l-1.3-1.29a3.95 3.95 0 00-.15-.36.5.5 0 11.9-.44c.07.14.17.38.27.69zm-2.15-2.86a1.5 1.5 0 00-1.57.27L4.12 2H16.5c.83 0 1.5.67 1.5 1.5v6.7a1.5 1.5 0 00-2.18.84 1.5 1.5 0 00-.87.07 1.5 1.5 0 00-.88-1z" />
		</svg>
	)
}
export default DesktopSpeakerOffIcon
