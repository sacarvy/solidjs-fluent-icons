import { splitProps } from "solid-js"
function ArrowMoveInwardIcon(props) {
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
			<path d="M13.03 3.72c.3.3.3.77 0 1.06l-2.5 2.5c-.3.3-.77.3-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06l1.22 1.22V1.75a.75.75 0 011.5 0v3.19l1.22-1.22c.3-.3.77-.3 1.06 0zM3.72 6.97c.3-.3.77-.3 1.06 0l2.5 2.5c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 01-1.06-1.06l1.22-1.22H1.75a.75.75 0 010-1.5h3.19L3.72 8.03a.75.75 0 010-1.06zm11.5 0a.75.75 0 111.06 1.06l-1.22 1.22h3.19a.75.75 0 010 1.5h-3.19l1.22 1.22a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 010-1.06l2.5-2.5zm-2.19 9.31c.3-.3.3-.77 0-1.06l-2.5-2.5a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 101.06 1.06l1.22-1.22v3.19a.75.75 0 001.5 0v-3.19l1.22 1.22c.3.3.77.3 1.06 0z" />
		</svg>
	)
}
export default ArrowMoveInwardIcon
