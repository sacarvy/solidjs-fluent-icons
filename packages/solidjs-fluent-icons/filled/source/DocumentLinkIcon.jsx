import { splitProps } from "solid-js"
function DocumentLinkIcon(props) {
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
			<path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5h-3.26a4.5 4.5 0 00-3.74-7H4V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM5 12.5a.5.5 0 00-.5-.5h-.2a3.5 3.5 0 00.2 7h.09a.5.5 0 00-.09-1h-.16a2.5 2.5 0 01.16-5h.09a.5.5 0 00.41-.5zm6 3A3.5 3.5 0 007.5 12h-.09a.5.5 0 00.09 1h.16a2.5 2.5 0 01-.16 5l-.1.01a.5.5 0 00.1 1V19h.2a3.5 3.5 0 003.3-3.5zM7.5 15H4.41a.5.5 0 00.09 1h3.09a.5.5 0 00-.09-1z" />
		</svg>
	)
}
export default DocumentLinkIcon
