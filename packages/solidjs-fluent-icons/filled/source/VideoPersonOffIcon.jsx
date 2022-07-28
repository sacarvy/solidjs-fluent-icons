import { splitProps } from "solid-js"
function VideoPersonOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L3.3 4.01C2.57 4.11 2 4.74 2 5.5v9c0 .83.67 1.5 1.5 1.5h11.8l1.85 1.85a.5.5 0 00.7-.7l-15-15zM11.3 12H7.5c-.83 0-1.5.67-1.5 1.5V15H3.5a.5.5 0 01-.5-.5v-9c0-.28.22-.5.5-.5h.8l3.22 3.22-.02.28a2.5 2.5 0 002.78 2.48L11.29 12zM8.57 6.45l3.48 3.48a2.5 2.5 0 00-3.48-3.48zM17 14.5c0 .1-.03.2-.1.29l.72.7c.24-.26.38-.6.38-.99v-9c0-.83-.67-1.5-1.5-1.5H6.12l1 1h9.38c.28 0 .5.22.5.5v9z" />
		</svg>
	)
}
export default VideoPersonOffIcon
