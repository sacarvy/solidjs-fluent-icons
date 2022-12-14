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
			<path d="M4.5 2A2.5 2.5 0 002 4.5V5h12v-.5A2.5 2.5 0 0011.5 2h-7zM14 6H2v5.5A2.5 2.5 0 004.5 14H5v-3a3 3 0 013-3h6V6zm-7.93 4.48A2 2 0 018 9h8a2 2 0 011.93 1.48L12 13.96l-5.93-3.48zm6.31 4.42L18 11.6V16a2 2 0 01-2 2H8a2 2 0 01-2-2v-4.4l5.62 3.3c.23.14.53.14.76 0z" />
		</svg>
	)
}
export default CalendarMailIcon
