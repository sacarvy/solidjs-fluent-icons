import { splitProps } from "solid-js"
function ProductionCheckmarkIcon(props) {
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
			<path d="M5 3.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3zm6.5-.5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-3zm.5 3V4h2v2h-2zM6 8a4 4 0 100 8h3.2a5.5 5.5 0 01.1-3.29A1 1 0 0110 11a1 1 0 01.23.03 5.49 5.49 0 017.1-1.25A4 4 0 0014 8H6zm0 5a1 1 0 110-2 1 1 0 010 2zm13 1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.85-1.85l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 00-.7-.7z" />
		</svg>
	)
}
export default ProductionCheckmarkIcon
