import { splitProps } from "solid-js"
function DesktopSpeakerIcon(props) {
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
			<path d="M3.5 2C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 000 1h6.38l-1-1H8v-2h1v-1.5c0-.83.67-1.5 1.5-1.5h.38l1.56-1.56a1.5 1.5 0 012.5.67c.3-.12.6-.14.88-.07A1.5 1.5 0 0118 10.2V3.5c0-.83-.67-1.5-1.5-1.5h-13zm10.2 9.04c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L11.29 16h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 01.8-.6zm-1.43 1.77c-.1-.3-.2-.55-.27-.7a.5.5 0 10-.9.45 4.6 4.6 0 01.45 1.78 3.94 3.94 0 01-.37 1.6l-.08.18a.5.5 0 10.9.44 5.5 5.5 0 00.55-2.22c0-.5-.1-1.02-.28-1.53z" />
		</svg>
	)
}
export default DesktopSpeakerIcon
