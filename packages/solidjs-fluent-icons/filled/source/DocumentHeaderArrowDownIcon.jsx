import { splitProps } from "solid-js"
function DocumentHeaderArrowDownIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h4.26A5.5 5.5 0 0116 9.2V4a2 2 0 00-2-2H6zm1 2h6a1 1 0 110 2H7a1 1 0 010-2zm12 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L15 15.29V12.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z" />
		</svg>
	)
}
export default DocumentHeaderArrowDownIcon
