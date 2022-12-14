import { splitProps } from "solid-js"
function DocumentWidthIcon(props) {
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
			<path d="M3.88 7.42a.5.5 0 01-.05.7l-1 .88H5.5a.5.5 0 010 1H2.83l1 .88a.5.5 0 11-.66.75l-2-1.75a.5.5 0 010-.75l2-1.75a.5.5 0 01.7.04zM17.17 10l-1 .88a.5.5 0 00.66.75l2-1.75a.5.5 0 000-.75l-2-1.75a.5.5 0 00-.66.75l1 .87H14.5a.5.5 0 000 1h2.67zM5 4a1 1 0 011-1h8a1 1 0 011 1v3.5h.02A1.5 1.5 0 0116 6.34V4a2 2 0 00-2-2H6a2 2 0 00-2 2v2.34a1.5 1.5 0 01.98 1.16H5V4zm-.37 8.24c.19-.22.3-.48.35-.74H5V16a1 1 0 001 1h8a1 1 0 001-1v-4.5h.02a1.5 1.5 0 00.98 1.16V16a2 2 0 01-2 2H6a2 2 0 01-2-2v-3.34c.24-.08.45-.22.63-.42z" />
		</svg>
	)
}
export default DocumentWidthIcon
