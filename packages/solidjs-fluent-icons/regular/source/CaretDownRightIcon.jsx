import { splitProps } from "solid-js"
function CaretDownRightIcon(props) {
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
			<path d="M13.3 5.25a1 1 0 011.7.7v7.55c0 .83-.67 1.5-1.5 1.5H5.96a1 1 0 01-.71-1.7l8.04-8.05zm.7.7L5.96 14h7.54a.5.5 0 00.5-.5V5.96z" />
		</svg>
	)
}
export default CaretDownRightIcon
