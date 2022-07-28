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
			<path d="M6 2.75a.75.75 0 00-1.5 0V4.5H2.75a.75.75 0 000 1.5H4.5v6.75a2.75 2.75 0 002.75 2.75H14v1.75a.75.75 0 001.5 0V15.5h1.75a.75.75 0 000-1.5h-10C6.56 14 6 13.44 6 12.75v-10zm8 4.5V13h1.5V7.25a2.75 2.75 0 00-2.75-2.75H7V6h5.75c.69 0 1.25.56 1.25 1.25z" />
		</svg>
	)
}
export default CropIcon
