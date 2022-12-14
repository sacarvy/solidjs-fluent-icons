import { splitProps } from "solid-js"
function TableMoveAboveIcon(props) {
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
			<path d="M3.5 3a.5.5 0 000 1h13a.5.5 0 000-1h-13zM8 12V8.41c.16.06.33.09.5.09v1a1.5 1.5 0 003 0v-1c.17 0 .34-.03.5-.09V12H8zm7 5h-2v-4h4v2a2 2 0 01-2 2zm2-5h-4V8h3.5c.28 0 .5.22.5.5V12zm-9 5h4v-4H8v4zM7 8v4H3V8.5c0-.28.22-.5.5-.5H7zm0 9H5a2 2 0 01-2-2v-2h4v4zm4.15-9.65a.5.5 0 00.7-.7l-1.5-1.5a.5.5 0 00-.7 0l-1.5 1.5a.5.5 0 10.7.7l.65-.64V9.5a.5.5 0 001 0V6.7l.65.65z" />
		</svg>
	)
}
export default TableMoveAboveIcon
