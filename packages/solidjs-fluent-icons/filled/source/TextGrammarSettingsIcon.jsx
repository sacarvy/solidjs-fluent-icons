import { splitProps } from "solid-js"
function TextGrammarSettingsIcon(props) {
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
			<path d="M18 5.75a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h14.5c.41 0 .75-.34.75-.75zm0 3a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h9.46a5.48 5.48 0 014.58 0h.46c.41 0 .75-.34.75-.75zM2.75 11h7.5a5.5 5.5 0 00-.88 1.5H2.75a.75.75 0 010-1.5zm0 3h6.27a5.57 5.57 0 00.07 1.5H2.75a.75.75 0 010-1.5zm9.32-2.56a2 2 0 01-1.43 2.48l-.47.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default TextGrammarSettingsIcon
