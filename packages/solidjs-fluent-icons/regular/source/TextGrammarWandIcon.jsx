import { splitProps } from "solid-js"
function TextGrammarWandIcon(props) {
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
			<path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15zm0 3a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 3a.5.5 0 000 1h6.88a1.5 1.5 0 01-.37-.99V11H2.5zm0 3h6.38l-1 1H2.5a.5.5 0 010-1zM14 7a.5.5 0 01.5.44l.1.79a2.5 2.5 0 002.17 2.18l.8.1a.5.5 0 010 .99l-.8.1a2.5 2.5 0 00-2.18 2.17l-.1.8a.5.5 0 01-.99 0l-.1-.8a2.5 2.5 0 00-2.17-2.18l-.8-.1a.5.5 0 010-.99l.8-.1a2.5 2.5 0 002.18-2.17l.1-.8A.5.5 0 0114 7zm0 2.6a3.5 3.5 0 01-1.4 1.4c.59.32 1.08.81 1.4 1.4a3.5 3.5 0 011.4-1.4A3.5 3.5 0 0114 9.6zm-2.15 3.55c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7-.7l4-4c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default TextGrammarWandIcon
