import { splitProps } from "solid-js"
function DocumentSplitHintOffIcon(props) {
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
			<path d="M4 4.7v4.8c0 .28.22.5.5.5h4.8l5.7 5.7v.3a1 1 0 01-1 1h-.5a.5.5 0 000 1h.5a2 2 0 001.9-1.39l1.25 1.24a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7L4 4.71zm11 8.18l.6.6A.5.5 0 0016 13v-1a.5.5 0 00-1 0v.88zM4.5 2.38L12.12 10h3.38a.5.5 0 00.5-.5V8h-4.5A1.5 1.5 0 0110 6.5V2H5.5c-.38 0-.73.14-1 .38zm6.5-.13V6.5c0 .28.22.5.5.5h4.25L11 2.25zM5 12a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zm0 3.5a.5.5 0 00-1 0v.5c0 1.1.9 2 2 2h.5a.5.5 0 000-1H6a1 1 0 01-1-1v-.5zm6 1.5H9a.5.5 0 000 1h2a.5.5 0 000-1z" />
		</svg>
	)
}
export default DocumentSplitHintOffIcon
