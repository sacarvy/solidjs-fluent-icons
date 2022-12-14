import { splitProps } from "solid-js"
function ChatOffIcon(props) {
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
			<path d="M4 4.7L2.15 2.86a.5.5 0 11.7-.7L4.71 4 16 15.3l1.85 1.85a.5.5 0 01-.7.7L15.29 16a7.97 7.97 0 01-8.9 1.14l-.12-.07-3.65.92a.5.5 0 01-.62-.45v-.08l.01-.08.92-3.64-.07-.12a7.95 7.95 0 01-.83-2.9l-.02-.37L2 10c0-2.03.76-3.88 2-5.3zm6.97 6.98l-.68-.68H7.41a.5.5 0 000 1H10.59a.5.5 0 00.38-.32zM8.29 9l-.97-.97a.5.5 0 00.09.96L7.5 9h.8z" />
			<path d="M12.5 9h-1.38l5.5 5.5A8 8 0 005.5 3.39L10.11 8H12.6a.5.5 0 010 1h-.09z" />
		</svg>
	)
}
export default ChatOffIcon
