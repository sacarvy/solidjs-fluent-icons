import { splitProps } from "solid-js"
function EyeIcon(props) {
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
			<path d="M3.26 11.6A6.97 6.97 0 0110 6c3.2 0 6.06 2.33 6.74 5.6a.5.5 0 00.98-.2A7.97 7.97 0 0010 5a7.97 7.97 0 00-7.72 6.4.5.5 0 00.98.2zM9.99 8a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
		</svg>
	)
}
export default EyeIcon
