import { splitProps } from "solid-js"
function AlertSnoozeIcon(props) {
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
			<path d="M5 11.5V8.05a5 5 0 016.36-4.87.5.5 0 10.27-.96A6 6 0 004 8v3.4l-.92 2.22A1 1 0 004 15h3.5a2.5 2.5 0 005 0H16a1 1 0 00.92-1.38L16 11.4V10a.5.5 0 00-1 0v1.5c0 .07.01.13.04.2L16 14H4l.96-2.3a.5.5 0 00.04-.2zM8.5 15h3a1.5 1.5 0 01-3 0zM14 2h3.5c.38 0 .6.4.45.71l-.04.08L14.96 7h2.54a.5.5 0 01.09 1H14a.5.5 0 01-.45-.71l.04-.08L16.54 3H14a.5.5 0 01-.09-1H14zM9.5 6H12c.4 0 .62.43.43.75l-.04.07L10.57 9H12a.5.5 0 01.1 1H9.5a.5.5 0 01-.43-.75l.05-.07L10.93 7H9.5a.5.5 0 01-.09-1h.1z" />
		</svg>
	)
}
export default AlertSnoozeIcon
