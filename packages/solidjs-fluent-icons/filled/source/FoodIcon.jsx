import { splitProps } from "solid-js"
function FoodIcon(props) {
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
			<path d="M9.5 3a.5.5 0 01.5.41V6.5a2.5 2.5 0 01-2 2.45v7.55a.5.5 0 01-1 .09V8.95a2.5 2.5 0 01-2-2.28V3.5a.5.5 0 011-.09V6.5c0 .65.42 1.2 1 1.41V3.5a.5.5 0 011-.09v4.5a1.5 1.5 0 001-1.26V3.5c0-.28.22-.5.5-.5zm5 0a.5.5 0 01.5.41V16.5a.5.5 0 01-1 .09V11h-1.5a.5.5 0 01-.5-.41V5.5A2.5 2.5 0 0114.5 3z" />
		</svg>
	)
}
export default FoodIcon
