import { splitProps } from "solid-js"
function DocumentSplitHintIcon(props) {
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
			<path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v1.5a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-6C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM5 12a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm11 0a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM5 15.5a.5.5 0 00-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 000-1H6a1 1 0 01-1-1v-.5zm11 0a.5.5 0 00-1 0v.5a1 1 0 01-1 1h-.5a.5.5 0 000 1h.5a2 2 0 002-2v-.5zM9 17a.5.5 0 000 1h2a.5.5 0 000-1H9z" />
		</svg>
	)
}
export default DocumentSplitHintIcon
