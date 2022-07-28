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
			<path d="M6.2 4L2 8.2V6.8L4.8 4h1.4zM3.5 16H5v-1.7l-1.7 1.69.2.01zm11.7 0H15v-1.2l3-3v1.4L15.2 16zM18 9.7l-3.1 3.1a2.5 2.5 0 00-.5-.92L18 8.3v1.42zM12.5 12a1.5 1.5 0 011.5 1.5V16h-1v-2.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5V16H6v-2.5c0-.08 0-.15.02-.22A1.5 1.5 0 017.5 12h5zm-2.78-1.02a2.49 2.49 0 01-2.21-2.7 2.5 2.5 0 112.21 2.7zM10 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.88 5.09l4.84-4.85a3.48 3.48 0 01-.39-1.02L2 13.79v.71c0 .2.04.4.12.59zm9.62-9.63a3.48 3.48 0 00-1.02-.39L11.79 4h1.42l-1.47 1.46zm1.58 1.93a3.49 3.49 0 00-.48-.94L15.29 4h1.21l.2.01-3.38 3.38zM12.45 11c.44-.43.76-.98.93-1.59l4.5-4.5c.08.18.12.38.12.59v.7l-4.87 4.88a2.5 2.5 0 00-.63-.08h-.05zM2 11.7L9.7 4H8.3L2 10.3v1.4z" />
		</svg>
	)
}
export default VideoBackgroundEffectIcon
