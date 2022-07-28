import { splitProps } from "solid-js"
function GavelIcon(props) {
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
			<path d="M6.67 7.59a1.5 1.5 0 01-.23-2.3l2.84-2.85a1.5 1.5 0 012.28.19l.47.65L7.3 8.01l-.63-.42zm1.48 1l4.47-4.49 1.33 1.84a.5.5 0 00.1.11l1.85 1.33-4.48 4.47-1.26-1.87a.5.5 0 00-.14-.14L8.15 8.58zm3.84 4.11l4.73-4.73.65.47c.75.54.84 1.63.19 2.28l-2.84 2.84a1.5 1.5 0 01-2.31-.22l-.42-.64zm-3.8-2.89L2.4 15.6a1.41 1.41 0 102 2l5.78-5.78-.8-1.2-1.2-.8zM12 16.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h2a.5.5 0 010 1h-7a.5.5 0 010-1h2a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default GavelIcon
