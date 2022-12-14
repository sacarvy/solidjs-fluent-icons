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
			<path d="M7.85 1.15a.5.5 0 10-.7.7L8.29 3H6a3 3 0 00-3 3v2.3L1.85 7.14a.5.5 0 10-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 10-.7-.7L4 8.29V6c0-1.1.9-2 2-2h2.3L7.14 5.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2zm.71 5.41a1.5 1.5 0 01-.56.35V7h4V3h-1.09a1.5 1.5 0 01-.35 1.56l-2 2zm-4 4a1.5 1.5 0 01-1.56.35V12h4V8h-.09c-.07.2-.19.4-.35.56l-2 2zM13 17h1.5a2.5 2.5 0 002.5-2.5V13h-4v4zm0-5V8h4v4h-4zm-1 0H8V8h4v4zm-4 1h4v4H8v-4zm-5 0h4v4H5.5A2.5 2.5 0 013 14.5V13zm10-6h4V5.5A2.5 2.5 0 0014.5 3H13v4z" />
		</svg>
	)
}
export default TableSwitchIcon
