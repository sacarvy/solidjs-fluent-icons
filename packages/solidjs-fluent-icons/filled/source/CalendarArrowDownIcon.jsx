import { splitProps } from "solid-js"
function CalendarArrowDownIcon(props) {
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
			<path d="M5.5 3A2.5 2.5 0 003 5.5V6h14v-.5A2.5 2.5 0 0014.5 3h-9zM17 7H3v7.5A2.5 2.5 0 005.5 17h4.1A5.5 5.5 0 0117 9.6V7zm2 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L15 15.29V12.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z" />
		</svg>
	)
}
export default CalendarArrowDownIcon
