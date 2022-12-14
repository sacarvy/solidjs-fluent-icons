import { splitProps } from "solid-js"
function TicketHorizontalIcon(props) {
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
			<path d="M16.5 5c.83 0 1.5.67 1.5 1.5V8a.5.5 0 01-.5.5 1.5 1.5 0 000 3c.28 0 .5.22.5.5v1.5c0 .83-.67 1.5-1.5 1.5h-13A1.5 1.5 0 012 13.5V12c0-.28.22-.5.5-.5a1.5 1.5 0 000-3A.5.5 0 012 8V6.5C2 5.67 2.67 5 3.5 5h13zm.5 1.5a.5.5 0 00-.5-.5h-13a.5.5 0 00-.5.5v1.05a2.5 2.5 0 010 4.9v1.05c0 .28.22.5.5.5h13a.5.5 0 00.5-.5v-1.05a2.5 2.5 0 01-.16-4.86l.16-.04V6.5z" />
		</svg>
	)
}
export default TicketHorizontalIcon
