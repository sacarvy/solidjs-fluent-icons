import { splitProps } from "solid-js"
function DocumentPdfIcon(props) {
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
			<path d="M6.5 11a.5.5 0 00-.5.5v2a.5.5 0 001 0v-.17h.33a1.17 1.17 0 000-2.33H6.5zm.83 1.33H7V12h.33a.17.17 0 010 .33zM12 11.5c0-.28.23-.5.5-.5h1a.5.5 0 110 1H13v.33h.5a.5.5 0 110 1H13v.17a.5.5 0 11-1 0v-2zM9.5 11a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h.5a1.5 1.5 0 000-3h-.5zm.5 2v-1a.5.5 0 010 1zm0-6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.58c-.58.2-1 .76-1 1.42v4c0 .65.42 1.2 1 1.41v.59c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-.59c.58-.2 1-.76 1-1.41v-4c0-.66-.42-1.21-1-1.42V8h-4.5A1.5 1.5 0 0110 6.5zM4.5 10h11c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-4c0-.28.23-.5.5-.5zM11 6.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DocumentPdfIcon
