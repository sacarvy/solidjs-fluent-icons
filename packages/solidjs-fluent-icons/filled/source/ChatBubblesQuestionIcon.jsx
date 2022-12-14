import { splitProps } from "solid-js"
function ChatBubblesQuestionIcon(props) {
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
			<path d="M8.5 1a6.5 6.5 0 00-5.68 9.67l-.8 2.08a1 1 0 001.21 1.32l2.49-.7A6.5 6.5 0 108.5 1zm0 3.9c-.37.07-.76.3-1.07.85a.5.5 0 11-.87-.5A2.57 2.57 0 018.3 3.92c.65-.13 1.3.04 1.8.36.48.32.87.84.88 1.47.01.66-.39 1.25-1.12 1.68-.5.3-.7.5-.77.63-.07.11-.1.21-.1.44a.5.5 0 01-1 0c0-.27.02-.61.25-.97.2-.34.56-.64 1.11-.96.54-.32.63-.62.63-.8 0-.2-.14-.46-.44-.65-.3-.2-.68-.3-1.05-.22zm.25 6.6a.75.75 0 110-1.5.75.75 0 010 1.5zm-2.21 3.24a6.49 6.49 0 007.7 1.64l2.49.7a1 1 0 001.2-1.33l-.8-2.08a6.47 6.47 0 00-1.37-8.04c.15.56.23 1.15.24 1.76a5.47 5.47 0 01.16 5.98l-.13.2.97 2.54-2.86-.8-.18.09A5.47 5.47 0 018.3 15a7.5 7.5 0 01-1.75-.26z" />
		</svg>
	)
}
export default ChatBubblesQuestionIcon
