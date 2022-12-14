import { splitProps } from "solid-js"
function ChatMultipleIcon(props) {
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
			<path d="M8.54 2a6.5 6.5 0 00-5.68 9.67l-.8 2.08a1 1 0 001.21 1.32l2.49-.7A6.5 6.5 0 108.54 2zm-5.5 6.5a5.5 5.5 0 113 4.9l-.18-.09-2.86.8.97-2.53-.13-.21a5.47 5.47 0 01-.8-2.87zM11.5 18a6.49 6.49 0 01-4.93-2.26 7.5 7.5 0 001.76.26 5.47 5.47 0 005.67.4l.18-.09 2.86.8-.97-2.53.13-.21a5.47 5.47 0 00-.16-5.98c-.01-.6-.1-1.2-.24-1.76a6.48 6.48 0 011.38 8.04l.8 2.08a1 1 0 01-1.21 1.32l-2.49-.7c-.84.4-1.79.63-2.78.63z" />
		</svg>
	)
}
export default ChatMultipleIcon
