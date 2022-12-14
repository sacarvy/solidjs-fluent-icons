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
			<path d="M14.5 17a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9zM4 12V8h3v4H4zm12-5H4V5.36A1.5 1.5 0 015.5 4h9.14A1.5 1.5 0 0116 5.5V7zM8 8h4v4H8V8zm-4 6.5V13h3v3H5.36A1.5 1.5 0 014 14.5zm8-1.5v3H8v-3h4zm4-5v4h-3V8h3zm0 5V14.64A1.5 1.5 0 0114.5 16H13v-3h3z" />
		</svg>
	)
}
export default TableFreezeRowIcon
