import { splitProps } from "solid-js"
function TextGrammarErrorIcon(props) {
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
			<path d="M2.75 5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75zm0 3a.75.75 0 000 1.5h9.46a5.48 5.48 0 014.58 0h.46a.75.75 0 000-1.5H2.75zm0 3h7.5a5.5 5.5 0 00-.88 1.5H2.75a.75.75 0 010-1.5zm0 3h6.27a5.57 5.57 0 00.07 1.5H2.75a.75.75 0 010-1.5zm16.25.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" />
		</svg>
	)
}
export default TextGrammarErrorIcon
