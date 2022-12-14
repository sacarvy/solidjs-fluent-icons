import { splitProps } from "solid-js"
function DocumentTextToolboxIcon(props) {
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
			<path d="M8.95 11c-.07-.37-.23-.7-.45-1h5a.5.5 0 010 1H8.95zm1.55 1c.22.3.38.63.45 1h2.55a.5.5 0 000-1h-3zm3 2H11v1h2.5a.5.5 0 000-1zM5 4v5h-.5c-.17 0-.34.02-.5.05V4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2h-3.05c.03-.16.05-.33.05-.5V17h3a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1zm6.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5zM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 00-1 0v.5H4v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 011 17.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" />
		</svg>
	)
}
export default DocumentTextToolboxIcon
