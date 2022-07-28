import { splitProps } from "solid-js"
function TextProofingToolsIcon(props) {
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
			<path d="M16.97 2.98c.52.25.91.74 1.17 1.46a.75.75 0 11-1.4.51c-.18-.47-.35-.59-.44-.63-.12-.06-.27-.07-.58-.07a.69.69 0 00-.5.17c-.12.1-.22.27-.3.5a2.81 2.81 0 00-.17.88c0 .41 0 .9.16 1.3.08.18.17.32.3.42.11.1.3.2.6.23.08 0 .28 0 .48-.07a.8.8 0 00.46-.45.75.75 0 011.37.61c-.63 1.42-2.03 1.45-2.48 1.4a2.58 2.58 0 01-1.4-.56c-.35-.3-.58-.68-.72-1.04a5 5 0 01-.27-1.8v-.08a3.36 3.36 0 01.03-.4c.03-.26.1-.61.23-.97.14-.36.35-.77.72-1.09.37-.34.87-.55 1.49-.55h.03c.28 0 .75 0 1.22.23zm-11.58.27A.75.75 0 004 3.23l-1.94 5a.75.75 0 101.4.54l.1-.27h2.11l.1.25a.75.75 0 001.4-.5l-1.77-5zM5.13 7h-1l.53-1.34L5.13 7zM8 3.5v5a.75.75 0 00.87.74v.01h1.63c.24 0 .73-.04 1.2-.3.52-.3.92-.87.92-1.7 0-.43-.1-.8-.28-1.12a1.7 1.7 0 00-.29-.35c.15-.27.24-.62.24-1.02 0-.41-.08-.77-.25-1.08a1.69 1.69 0 00-.66-.67c-.46-.26-.95-.26-1.12-.26H8.75A.75.75 0 008 3.5zm2.5 4.25h-1v-1H10.44c.19 0 .38.01.51.08.05.02.08.05.1.08.03.04.07.13.07.33 0 .17-.04.26-.06.3a.3.3 0 01-.12.1.96.96 0 01-.44.11zm-.88-2.5H9.5v-1h.75c.16 0 .3.01.4.07a.2.2 0 01.08.08c.02.04.06.15.06.36 0 .18-.03.27-.06.3a.25.25 0 01-.1.1.76.76 0 01-.35.09h-.66zm4.32 5.72a.75.75 0 00-1.16-.94l-3.56 4.35-1.69-1.68a.75.75 0 00-1.06 1.06l2.27 2.27a.75.75 0 001.11-.06l4.1-5z" />
		</svg>
	)
}
export default TextProofingToolsIcon
