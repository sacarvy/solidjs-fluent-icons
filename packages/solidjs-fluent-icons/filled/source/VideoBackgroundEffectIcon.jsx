import { splitProps } from "solid-js"
function VideoBackgroundEffectIcon(props) {
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
			<path d="M6.2 4L2 8.2V6.8L4.8 4h1.4zm7 0l-1.46 1.46a3.48 3.48 0 00-1.02-.39L11.79 4h1.42zm-1.08 3.17a2.51 2.51 0 00-2.34-1.16 2.5 2.5 0 102.34 1.16zm.72-.72c.2.29.37.6.48.94L16.69 4 16.5 4h-1.2l-2.46 2.45zM7.5 12c-.08 0-.15 0-.22.02A1.5 1.5 0 006 13.5V16h8v-2.5a1.5 1.5 0 00-1.5-1.5h-5zm5-1c.22 0 .43.03.63.08L18 6.2V5.5c0-.2-.04-.4-.12-.59l-4.5 4.5a3.5 3.5 0 01-.93 1.59h.05zm1.9.88c.23.27.4.58.5.93L18 9.7V8.29l-3.6 3.6zM15 16v-1.2l3-3v1.4L15.2 16H15zm-10-.3v-1.4l-1.7 1.69.2.01h1.2l.3-.3zm1.57-6.48c.08.36.21.7.4 1.02L2.11 15.1A1.5 1.5 0 012 14.5v-.7l4.57-4.58zM9.71 4L2 11.7v-1.4L8.3 4h1.4z" />
		</svg>
	)
}
export default VideoBackgroundEffectIcon
