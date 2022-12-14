import { splitProps } from "solid-js"
function ChatMailIcon(props) {
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
			<path d="M6 6c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3A.5.5 0 016 6zm.5 1.5a.5.5 0 000 1h2a.5.5 0 000-1h-2zM8 1a6 6 0 00-5.27 8.87l-.71 2.5a.5.5 0 00.64.6L5 12.2A6 6 0 108 1zM3 7a5 5 0 112.33 4.23.5.5 0 00-.43-.06l-1.66.56.51-1.79a.5.5 0 00-.05-.39A4.97 4.97 0 013 7zm9.28 7.95l-2.4-1.2c.43-.13.86-.29 1.26-.5l1.36.7 4.5-2.26V11a1 1 0 00-1-1h-1.67c.15-.32.28-.65.38-1H16a2 2 0 012 2v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-2.07c.33.05.66.07 1 .07v2a1 1 0 001 1h7a1 1 0 001-1v-3.2l-4.28 2.15a.5.5 0 01-.44 0z" />
		</svg>
	)
}
export default ChatMailIcon
