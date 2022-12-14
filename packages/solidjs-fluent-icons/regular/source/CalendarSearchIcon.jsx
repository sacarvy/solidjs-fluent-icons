import { splitProps } from "solid-js"
function CalendarSearchIcon(props) {
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
			<path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v3.76c.32-.12.65-.2 1-.23V7h12v7.5c0 .83-.67 1.5-1.5 1.5H9.12l1 1h4.38a2.5 2.5 0 002.5-2.5v-9zM5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5C4 4.67 4.67 4 5.5 4zm1.1 12.3a3.5 3.5 0 11.7-.7l2.55 2.55a.5.5 0 01-.7.7L6.6 16.3zm.4-2.8a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
		</svg>
	)
}
export default CalendarSearchIcon
