import { splitProps } from "solid-js"
function TableMoveRightIcon(props) {
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
			<path d="M16.5 3c.28 0 .5.22.5.5v13a.5.5 0 01-1 0v-13c0-.28.22-.5.5-.5zm-4.5.5v3.88a1.5 1.5 0 00-.41.62H8v4h3.59a1.5 1.5 0 00.41.62v3.88a.5.5 0 01-.5.5H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h6.5c.28 0 .5.22.5.5zM7 4H5a1 1 0 00-1 1v2h3V4zm-3 8h3V8H4v4zm0 1v2a1 1 0 001 1h2v-3H4zm4 0v3h3v-3H8zm3-9H8v3h3V4zm1.65 7.15a.5.5 0 00.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7.7l.64.65H10.5a.5.5 0 000 1h2.8l-.65.65z" />
		</svg>
	)
}
export default TableMoveRightIcon
