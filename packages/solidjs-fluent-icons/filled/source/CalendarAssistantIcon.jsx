import { splitProps } from "solid-js"
function CalendarAssistantIcon(props) {
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
			<path d="M17 7v2.6A5.5 5.5 0 009.6 17H5.5A2.5 2.5 0 013 14.5V7h14zm-2.5-4A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9zm0 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1.1-7.17a.5.5 0 01.48-.33h1.18a.5.5 0 01.47.66l-.28.84H16a.5.5 0 01.42.77l-2.25 3.5a.5.5 0 01-.9-.4l.5-1.87H13a.5.5 0 01-.47-.67l.88-2.5z" />
		</svg>
	)
}
export default CalendarAssistantIcon
