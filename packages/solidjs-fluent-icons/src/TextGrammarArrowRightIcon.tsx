import { splitProps, ComponentProps, JSX } from "solid-js"

function TextGrammarArrowRightIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15zm0 3a.5.5 0 000 1h15a.5.5 0 000-1h-15zm7.24 3c.26.3.48.64.66 1h7.1a.5.5 0 000-1H9.74zM11 14.5c0 .17 0 .34-.02.5h6.52a.5.5 0 000-1h-6.52l.02.5zm-10 0a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm4.15 2.35a.5.5 0 00.7-.7L4.71 15H7.5a.5.5 0 000-1H4.7l1.15-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 00-.15.35.5.5 0 00.14.35l2 2z" />
		</svg>
	)
}
export default TextGrammarArrowRightIcon
