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
			<path d="M4 4.7v4.8a.5.5 0 001 0V5.7l10 10v.3a1 1 0 01-1 1h-.5a.5.5 0 000 1h.5a2 2 0 001.9-1.39l1.25 1.24a.5.5 0 00.7-.7l-15-15a.5.5 0 10-.7.7L4 4.71zm11 8.18l.6.6A.5.5 0 0016 13v-1a.5.5 0 00-1 0v.88zM4.65 2.53l.7.7A1 1 0 016 3h4v3.5c0 .83.67 1.5 1.5 1.5H15v1.5a.5.5 0 001 0V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6a2 2 0 00-1.35.53zM11 3.2L14.8 7h-3.3a.5.5 0 01-.5-.5V3.2zM4.5 11.5c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm0 3.5c.28 0 .5.22.5.5v.5a1 1 0 001 1h.5a.5.5 0 010 1H6a2 2 0 01-2-2v-.5c0-.28.22-.5.5-.5zM9 18a.5.5 0 010-1h2a.5.5 0 010 1H9z" />
		</svg>
	)
}
export default DocumentSplitHintOffIcon
