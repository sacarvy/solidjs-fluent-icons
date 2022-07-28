import { splitProps } from "solid-js"
function TableFreezeRowIcon(props) {
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
			<path d="M14.5 4c.83 0 1.5.67 1.5 1.5V8h-3v4h4V5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V12h4V8H4V5.5C4 4.67 4.67 4 5.5 4h9zM3 14.5V13h4v4H5.5A2.5 2.5 0 013 14.5zm9-1.5H8v4h4v-4zM8 8v4h4V8H8zm5 9v-4h4v1.5a2.5 2.5 0 01-2.5 2.5H13z" />
		</svg>
	)
}
export default TableFreezeRowIcon
