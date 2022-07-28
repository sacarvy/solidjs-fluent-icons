import { splitProps } from "solid-js"
function DocumentTableSearchIcon(props) {
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
			<path d="M6.44 9.44A1.5 1.5 0 017.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H9.12l-.56-.56c.28-.59.44-1.25.44-1.94V15h3.5a.5.5 0 00.5-.5V13H9v.5c0-1.07-.37-2.06-1-2.83V10h-.5a.5.5 0 00-.15.02 4.5 4.5 0 00-.91-.58zM13 10.5a.5.5 0 00-.5-.5H9v2h4v-1.5zM5 9.03a4.55 4.55 0 00-1 0V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2h-3.09a1.5 1.5 0 00-.35-.56l-.44-.44H14a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v5.03zM11.5 7h3.3L11 3.2v3.3c0 .28.22.5.5.5zm-4.2 8.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 10.7-.7L7.3 15.6zM7 13.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
		</svg>
	)
}
export default DocumentTableSearchIcon
