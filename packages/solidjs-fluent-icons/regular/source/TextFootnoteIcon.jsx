import { splitProps } from "solid-js"
function TextFootnoteIcon(props) {
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
			<path d="M18 3.5a.5.5 0 00-1 0c0 .47-.1.84-.3 1.17-.2.33-.52.65-.99.97a.5.5 0 10.58.83c.26-.19.5-.38.71-.59V9.5a.5.5 0 001 0v-6zm-7.5 11.54a.5.5 0 00.36-.14.5.5 0 00.15-.38v-.66h.02a2.3 2.3 0 002.07 1.18c.8 0 1.46-.3 1.95-.89.5-.6.74-1.39.74-2.38 0-1-.25-1.79-.74-2.38-.49-.6-1.14-.9-1.93-.9a2.23 2.23 0 00-2.03 1.17h-.03V6.61c0-.17-.05-.3-.15-.41a.49.49 0 00-.38-.16.51.51 0 00-.38.16c-.1.1-.15.24-.15.4v7.92c0 .16.04.28.13.38.1.1.21.14.36.14zm3.72-1.56c-.33.42-.77.63-1.33.63-.54 0-.98-.21-1.33-.64-.34-.43-.5-1-.5-1.7s.16-1.26.5-1.7c.35-.43.8-.65 1.33-.65.56 0 1 .22 1.33.64.32.42.48.99.48 1.7 0 .73-.16 1.3-.48 1.72zM2.16 14.87c.1.09.25.13.41.13.27 0 .46-.14.56-.42l.8-2.2h3.63l.81 2.2c.1.28.29.42.56.42a.6.6 0 00.4-.13c.12-.1.17-.21.17-.35a.9.9 0 00-.07-.3l-2.95-7.7C6.34 6.19 6.11 6 5.76 6c-.36 0-.61.18-.75.53l-2.94 7.68a.9.9 0 00-.07.3c0 .15.05.26.16.36zm5.07-3.42H4.27l1.46-4.02h.04l1.46 4.02z" />
		</svg>
	)
}
export default TextFootnoteIcon
