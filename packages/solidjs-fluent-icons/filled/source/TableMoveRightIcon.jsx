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
			<path d="M17 3.5a.5.5 0 00-1 0v13a.5.5 0 001 0v-13zM8 8h3.59a1.5 1.5 0 00-.09.5h-1a1.5 1.5 0 100 3h1c0 .17.03.34.09.5H8V8zm-5 7v-2h4v4H5a2 2 0 01-2-2zm5 2v-4h4v3.5a.5.5 0 01-.5.5H8zM3 8v4h4V8H3zm9-1H8V3h3.5c.28 0 .5.22.5.5V7zM3 7V5c0-1.1.9-2 2-2h2v4H3zm9.65 4.15a.5.5 0 00.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7.7l.64.65H10.5a.5.5 0 000 1h2.8l-.65.65z" />
		</svg>
	)
}
export default TableMoveRightIcon
