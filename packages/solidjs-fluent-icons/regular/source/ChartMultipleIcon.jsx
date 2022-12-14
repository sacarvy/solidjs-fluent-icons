import { splitProps } from "solid-js"
function ChartMultipleIcon(props) {
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
			<path d="M3 9.5a6.5 6.5 0 006 6.48v1A7.5 7.5 0 1116.98 9a2 2 0 00-1.71 1H10.5A1.5 1.5 0 019 8.5V3.02A6.5 6.5 0 003 9.5zM15.98 9A6.5 6.5 0 0010 3.02V8.5c0 .28.22.5.5.5h5.48zm.02 2a1 1 0 112 0v7a1 1 0 11-2 0v-7zm-6 4a1 1 0 112 0v3a1 1 0 11-2 0v-3zm3-2a1 1 0 112 0v5a1 1 0 11-2 0v-5z" />
		</svg>
	)
}
export default ChartMultipleIcon
