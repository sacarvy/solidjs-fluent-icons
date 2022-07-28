import { splitProps } from "solid-js"
function DocumentJavascriptIcon(props) {
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
			<path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v7.59c.32.1.59.33.77.6A2.5 2.5 0 019 13.5c0 .44-.2.84-.5 1.12.32.42.5.95.5 1.5v.38c0 .56-.19 1.08-.5 1.5h6c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm1 0V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zM3.5 12a.5.5 0 00-.5.5v4a.5.5 0 01-1 0V16a.5.5 0 00-1 0v.5a1.5 1.5 0 003 0v-4a.5.5 0 00-.5-.5zM5 13.5a1.5 1.5 0 013 0 .5.5 0 01-1 0 .5.5 0 00-1 0v.38c0 .2.1.36.28.45l.9.45c.5.25.82.77.82 1.34v.38a1.5 1.5 0 01-3 0 .5.5 0 011 0 .5.5 0 001 0v-.38a.5.5 0 00-.28-.45l-.9-.45A1.5 1.5 0 015 13.88v-.38z" />
		</svg>
	)
}
export default DocumentJavascriptIcon
