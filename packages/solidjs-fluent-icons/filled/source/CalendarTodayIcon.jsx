import { splitProps } from "solid-js"
function CalendarTodayIcon(props) {
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
			<path d="M10 10a1 1 0 100-2 1 1 0 000 2zm7 4.5V7H3v7.5A2.5 2.5 0 005.5 17h3v-1.75a1.5 1.5 0 01-.98-2.64h.01l1.5-1.25a1.5 1.5 0 011.94 0l1.5 1.25a1.5 1.5 0 01-.97 2.64V17h3a2.5 2.5 0 002.5-2.5zM12 9a2 2 0 11-4 0 2 2 0 014 0zm5-3.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V6h14v-.5zm-5.82 8.63a.5.5 0 00.64-.76l-1.5-1.25a.5.5 0 00-.64 0l-1.5 1.25a.5.5 0 10.64.76l.68-.56v3.93a.5.5 0 101 0v-3.93l.68.56z" />
		</svg>
	)
}
export default CalendarTodayIcon
