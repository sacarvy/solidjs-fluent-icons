import { splitProps } from "solid-js"
function EmojiSparkleIcon(props) {
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
			<path d="M14.88.28l.35 1.07a2.2 2.2 0 001.4 1.4l1.07.35h.02a.42.42 0 010 .8l-1.07.35a2.2 2.2 0 00-1.4 1.4l-.01.04-.01.01-.23.7-.1.32a.42.42 0 01-.16.2.42.42 0 01-.64-.2l-.35-1.07a2.23 2.23 0 00-1.4-1.4l-.64-.22-.43-.13a.42.42 0 01-.28-.4.42.42 0 01.28-.4l1.07-.35a2.2 2.2 0 001.38-1.4l.35-1.07a.42.42 0 01.8 0zm4.9 7.93l-.76-.25a1.58 1.58 0 01-1-1l-.25-.76a.3.3 0 00-.57 0l-.25.77a1.58 1.58 0 01-.98 1l-.77.24a.3.3 0 00-.15.11.3.3 0 00.15.46l.77.25a1.58 1.58 0 011 1l.24.77a.3.3 0 00.58 0l.24-.77a1.58 1.58 0 011-1l.77-.24a.3.3 0 000-.57h-.02zM10 18a8 8 0 007.75-6.02 1.3 1.3 0 01-1.48-.87l-.25-.76a.57.57 0 00-.36-.36l-.79-.26a1.3 1.3 0 01-.75-1.78 1.4 1.4 0 01-.44-.21l-.04-.03-.03-.02c-.21-.17-.37-.4-.46-.66l-.34-1.07a1.2 1.2 0 00-.76-.76l-1.1-.36a1.42 1.42 0 01.02-2.7l.2-.06A8 8 0 1010 18zm-3.55-5.57c.2-.2.51-.2.7 0a4.01 4.01 0 005.52.17l.18-.17.06-.06a.5.5 0 01.7.7l-.06.06-.2.2a5.01 5.01 0 01-6.9-.2.5.5 0 010-.7zM11.5 8.5a1 1 0 112 0 1 1 0 01-2 0zm-5 0a1 1 0 112 0 1 1 0 01-2 0z" />
		</svg>
	)
}
export default EmojiSparkleIcon
