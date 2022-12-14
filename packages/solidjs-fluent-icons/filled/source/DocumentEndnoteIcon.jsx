import { splitProps } from "solid-js"
function DocumentEndnoteIcon(props) {
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
			<path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H11v-6a2 2 0 00-2-2H4V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM3.5 11a.5.5 0 010 1h-1a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h1a.5.5 0 010 1h-1A1.5 1.5 0 011 17.5v-5c0-.83.67-1.5 1.5-1.5h1zm4 7a.5.5 0 000 1h1c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 000 1h1c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-1zM6 14.5a.5.5 0 00-1 0v3a.5.5 0 101 0v-3zm0-2a.5.5 0 11-1 0 .5.5 0 011 0z" />
		</svg>
	)
}
export default DocumentEndnoteIcon
