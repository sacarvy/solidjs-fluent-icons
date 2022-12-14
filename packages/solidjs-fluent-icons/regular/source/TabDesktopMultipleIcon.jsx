import { splitProps } from "solid-js"
function TabDesktopMultipleIcon(props) {
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
			<path d="M4.5 2A2.5 2.5 0 002 4.5v8A2.5 2.5 0 004.5 15h8a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0012.5 2h-8zM14 4.5V5H7.5a.5.5 0 01-.5-.5V3h5.5c.83 0 1.5.67 1.5 1.5zm-8 0C6 5.33 6.67 6 7.5 6H14v6.5c0 .83-.67 1.5-1.5 1.5h-8A1.5 1.5 0 013 12.5v-8C3 3.67 3.67 3 4.5 3H6v1.5zM7.5 18a2.5 2.5 0 01-2.45-2h1.04c.2.58.76 1 1.41 1H14a3 3 0 003-3V7.5c0-.65-.42-1.2-1-1.41V5.05a2.5 2.5 0 012 2.45V14a4 4 0 01-4 4H7.5z" />
		</svg>
	)
}
export default TabDesktopMultipleIcon
