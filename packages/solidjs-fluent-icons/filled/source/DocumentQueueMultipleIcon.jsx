import { splitProps } from "solid-js"
function DocumentQueueMultipleIcon(props) {
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
			<path d="M12.38 3.75l1.11 1.12L16 7.37v-.66c0-.46-.18-.9-.5-1.23l-2.4-2.44A3.5 3.5 0 0010.6 2H5.75C4.83 2 4.07 2.72 4 3.62 4.48 3.23 5.1 3 5.75 3h4.85c.67 0 1.31.27 1.78.75zM2.5 13c.28 0 .5.22.5.5v1A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-1a.5.5 0 011 0v1a3.5 3.5 0 01-3.5 3.5h-9A3.5 3.5 0 012 14.5v-1c0-.28.22-.5.5-.5zM10 4v4.5c0 .83.67 1.5 1.5 1.5H16v4.5c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-9C4 4.67 4.67 4 5.5 4H10zM6 7.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zM6.5 9a.5.5 0 000 1h2a.5.5 0 000-1h-2zM6 11.5c0 .28.22.5.5.5h2a.5.5 0 000-1h-2a.5.5 0 00-.5.5zm5-7.25V8.5c0 .28.22.5.5.5h4.25L11 4.25z" />
		</svg>
	)
}
export default DocumentQueueMultipleIcon
