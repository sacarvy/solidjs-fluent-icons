import { splitProps } from "solid-js"
function VideoRecordingIcon(props) {
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
			<path d="M10.5 4A2.5 2.5 0 0113 6.5v7a2.5 2.5 0 01-2 2.45V12.5A3.5 3.5 0 007.5 9h-4c-.54 0-1.05.12-1.5.34V6.5A2.5 2.5 0 014.5 4h6zm3.5 8.08V7.93l2.77-2.31a.75.75 0 011.23.57v7.67c0 .64-.75.99-1.24.57L14 12.08zM1 12.5A2.5 2.5 0 013.5 10h4a2.5 2.5 0 012.5 2.5v4A2.5 2.5 0 017.5 19h-4A2.5 2.5 0 011 16.5v-4zm4.02.03a.45.45 0 00-.45-.03.5.5 0 00-.15.1.5.5 0 00-.14.36v3.08a.5.5 0 00.14.35.45.45 0 00.48.13.52.52 0 00.13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 000-.49.49.49 0 00-.17-.18l-2.3-1.5z" />
		</svg>
	)
}
export default VideoRecordingIcon
