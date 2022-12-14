import { splitProps } from "solid-js"
function DualScreenSpanIcon(props) {
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
			<path d="M16 16h-5.5v-5.5h3.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7l1.14 1.15H10.5V4H16a2 2 0 012 2v8a2 2 0 01-2 2zM9.5 9.5V4H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.5v-5.5H5.7l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 11.7.7L5.71 9.5H9.5z" />
		</svg>
	)
}
export default DualScreenSpanIcon
