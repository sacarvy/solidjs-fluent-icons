import { splitProps } from "solid-js"
function CropIcon(props) {
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
			<path d="M6 2.5a.5.5 0 00-1 0V5H2.5a.5.5 0 000 1H5v6.5A2.5 2.5 0 007.5 15H14v2.5a.5.5 0 001 0V15h2.5a.5.5 0 000-1h-10A1.5 1.5 0 016 12.5v-10zm8 5V13h1V7.5A2.5 2.5 0 0012.5 5H7v1h5.5c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default CropIcon
