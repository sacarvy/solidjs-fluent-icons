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
			<path d="M9 15.5c0 .54.12 1.05.34 1.5H8v-4h2.05A3.49 3.49 0 009 15.5zM13 8v4h3.5c.17 0 .34.01.5.04V8h-4zm-1 4V8H8v4h4zm-5 0V8H3v4h4zm-4 1h4v4H5.5A2.5 2.5 0 013 14.5V13zm10-6h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-1-4v4H8V3h4zM7 3v4H3V5.5A2.5 2.5 0 015.5 3H7zm3 12.5a2.5 2.5 0 012.5-2.5h.5a.5.5 0 010 1h-.5a1.5 1.5 0 000 3h.5a.5.5 0 010 1h-.5a2.5 2.5 0 01-2.5-2.5zm5.5-2c0-.28.22-.5.5-.5h.5a2.5 2.5 0 010 5H16a.5.5 0 010-1h.5a1.5 1.5 0 000-3H16a.5.5 0 01-.5-.5zm-3 1.5a.5.5 0 000 1h4a.5.5 0 000-1h-4z" />
		</svg>
	)
}
export default TableLinkIcon
