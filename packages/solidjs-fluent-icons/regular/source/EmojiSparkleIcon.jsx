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
			<path d="M14.88.28l.35 1.07a2.2 2.2 0 001.4 1.4l1.07.35h.02a.42.42 0 010 .8l-1.07.35a2.2 2.2 0 00-1.4 1.4l-.35 1.07a.42.42 0 01-.8 0l-.35-1.07a2.23 2.23 0 00-1.4-1.4l-1.07-.35a.42.42 0 010-.8l1.07-.35a2.2 2.2 0 001.38-1.4l.35-1.07a.42.42 0 01.8 0zm4.9 7.93l-.76-.25a1.58 1.58 0 01-1-1l-.25-.76a.3.3 0 00-.57 0l-.25.77a1.58 1.58 0 01-.98 1l-.77.24a.3.3 0 000 .57l.77.25a1.58 1.58 0 011 1l.03.1.21.67a.3.3 0 00.58 0l.24-.77a1.58 1.58 0 011-1l.77-.24a.3.3 0 000-.57h-.02zM17.3 12a1.3 1.3 0 01-.53-.21A7 7 0 1110.1 3a1.42 1.42 0 01.88-.85l.2-.07a8 8 0 106.59 9.9c-.15.03-.3.03-.46 0zm-4.63.6a4.01 4.01 0 01-5.52-.16.5.5 0 10-.7.7 5.01 5.01 0 007.08.02l.02-.02.06-.07a.5.5 0 00-.76-.63l-.18.17zm.83-4.09a1 1 0 10-2 0 1 1 0 002 0zm-5 0a1 1 0 10-2 0 1 1 0 002 0z" />
		</svg>
	)
}
export default EmojiSparkleIcon
