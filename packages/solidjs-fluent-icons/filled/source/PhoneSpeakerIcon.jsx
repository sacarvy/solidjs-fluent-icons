import { splitProps } from "solid-js"
function PhoneSpeakerIcon(props) {
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
			<path d="M5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h4.99A1.5 1.5 0 019 16.5V15H8a.5.5 0 010-1h1.09c.2-.58.76-1 1.41-1h.38l1.56-1.56a1.5 1.5 0 011.56-.35V3.5c0-.83-.67-1.5-1.5-1.5h-7zm8.2 10.04c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L11.29 17h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 01.8-.6zm-1.43 1.77c-.1-.3-.2-.55-.27-.7a.5.5 0 10-.9.45 4.6 4.6 0 01.45 1.78 3.94 3.94 0 01-.37 1.6l-.08.18a.5.5 0 10.9.44 5.5 5.5 0 00.55-2.22c0-.5-.1-1.02-.28-1.53z" />
		</svg>
	)
}
export default PhoneSpeakerIcon
