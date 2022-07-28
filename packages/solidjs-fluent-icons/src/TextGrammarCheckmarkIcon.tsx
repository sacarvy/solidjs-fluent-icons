import { splitProps, ComponentProps, JSX } from "solid-js"

function TextGrammarCheckmarkIcon(
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
			<path d="M17.5 5a.5.5 0 010 1h-15a.5.5 0 010-1h15zm0 3a.5.5 0 010 1h-15a.5.5 0 010-1h15zM9 14.5c0-.17 0-.34.02-.5H2.5a.5.5 0 000 1h6.52a5.57 5.57 0 01-.02-.5zm.6-2.5c.18-.36.4-.7.66-1H2.5a.5.5 0 000 1h7.1zm4.9-2a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm-1.12 5.77l-1-1.23-.06-.06a.5.5 0 00-.72.7l1.34 1.64.07.07c.2.16.48.15.67-.02l3.5-3.65.07-.06a.5.5 0 00-.75-.66l-3.12 3.27z" />
		</svg>
	)
}
export default TextGrammarCheckmarkIcon
