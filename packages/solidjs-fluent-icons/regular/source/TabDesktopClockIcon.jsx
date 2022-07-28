import { splitProps } from "solid-js"
function TabDesktopClockIcon(props) {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-4.1c.16-.32.3-.65.4-1h3.7c.83 0 1.5-.67 1.5-1.5V7H9.5A1.5 1.5 0 018 5.5V4H5.5C4.67 4 4 4.67 4 5.5v3.7c-.35.1-.68.24-1 .4V5.5zM16 6v-.5c0-.83-.67-1.5-1.5-1.5H9v1.5c0 .28.22.5.5.5H16zm-6 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM5.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H7a.5.5 0 000-1H6v-1.5a.5.5 0 00-.5-.5z" />
		</svg>
	)
}
export default TabDesktopClockIcon
