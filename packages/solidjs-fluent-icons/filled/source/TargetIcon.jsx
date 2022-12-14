import { splitProps } from "solid-js"
function TargetIcon(props) {
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
			<path d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-3.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" />
		</svg>
	)
}
export default TargetIcon
