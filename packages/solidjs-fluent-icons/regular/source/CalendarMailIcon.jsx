import { splitProps } from "solid-js"
function CalendarMailIcon(props) {
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
			<path d="M2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V8h-1V6H3v5.5c0 .83.67 1.5 1.5 1.5H5v1h-.5A2.5 2.5 0 012 11.5v-7zm11 0c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h10v-.5zM8 9a2 2 0 00-2 2v5c0 1.1.9 2 2 2h8a2 2 0 002-2v-5a2 2 0 00-2-2H8zm-1 2a1 1 0 011-1h8a1 1 0 011 1v.02l-5 2.94-5-2.94V11zm0 1.18l4.62 2.72c.23.14.53.14.76 0L17 12.18V16a1 1 0 01-1 1H8a1 1 0 01-1-1v-3.82z" />
		</svg>
	)
}
export default CalendarMailIcon
