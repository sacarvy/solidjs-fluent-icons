import { splitProps } from "solid-js"
function PanelBottomExpandIcon(props) {
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
			<path d="M10.5 8.83l.87 1a.5.5 0 00.76-.66l-1.75-2a.5.5 0 00-.76 0l-1.75 2a.5.5 0 00.76.65l.87-1v3.68a.5.5 0 001 0V8.83zM4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h12a1 1 0 011 1v5h-5.5v1H17v2a1 1 0 01-1 1H4a1 1 0 01-1-1v-2h5.5v-1H3V6z" />
		</svg>
	)
}
export default PanelBottomExpandIcon
