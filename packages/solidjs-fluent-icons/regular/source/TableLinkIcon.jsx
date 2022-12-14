import { splitProps } from "solid-js"
function TableLinkIcon(props) {
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
			<path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h3.84a3.48 3.48 0 01-.3-1H8v-3h2.05a3.49 3.49 0 012.45-1h.5V8h3v4h.5c.17 0 .34.01.5.04V5.5zM12 8v4H8V8h4zm-8 6.5V13h3v3H5.36A1.5 1.5 0 014 14.5zM12 7H8V4h4v3zm1-3H14.64A1.5 1.5 0 0116 5.5V7h-3V4zM4 7V5.36A1.5 1.5 0 015.5 4H7v3H4zm3 1v4H4V8h3zm3 7.5a2.5 2.5 0 012.5-2.5h.5a.5.5 0 010 1h-.5a1.5 1.5 0 000 3h.5a.5.5 0 010 1h-.5a2.5 2.5 0 01-2.5-2.5zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 010 5H16a.5.5 0 010-1h.5a1.5 1.5 0 000-3H16a.5.5 0 01-.5-.5zm-3 1.5a.5.5 0 000 1h4a.5.5 0 000-1h-4z" />
		</svg>
	)
}
export default TableLinkIcon
