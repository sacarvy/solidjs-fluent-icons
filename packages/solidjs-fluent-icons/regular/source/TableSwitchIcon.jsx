import { splitProps } from "solid-js"
function TableSwitchIcon(props) {
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
			<path d="M7.85 1.15a.5.5 0 10-.7.7L8.29 3H6a3 3 0 00-3 3v2.3L1.85 7.14a.5.5 0 10-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 10-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2zM7 12V7h5V4h-1.09a1.5 1.5 0 000-1h3.59A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-3.59c.32.12.68.12 1 0V12h3zm-3 2.5c0 .78.6 1.42 1.36 1.5H7v-3H4v1.5zm8-1.5H8v3h4v-3zm2.5 3c.78 0 1.42-.6 1.5-1.36V13h-3v3h1.5zM12 8H8v4h4V8zm1 0v4h3V8h-3zm0-4v3h3V5.5c0-.78-.6-1.42-1.36-1.5H13z" />
		</svg>
	)
}
export default TableSwitchIcon
