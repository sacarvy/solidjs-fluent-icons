import { splitProps } from "solid-js"
function AlertOnIcon(props) {
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
			<path d="M1.8 2.1a.5.5 0 10-.6.8l2 1.5a.5.5 0 10.6-.8l-2-1.5zM1 7a.5.5 0 000 1h1.5a.5.5 0 000-1H1zm11.45 9a2.5 2.5 0 01-4.9 0h4.9zM10 2a5.92 5.92 0 015.98 5.35l.02.23V11.4l.95 2.6.03.08.01.09v.08c0 .32-.19.6-.51.71l-.12.03-.11.01H3.75a.75.75 0 01-.74-.76v-.12l.04-.13.95-2.58V7.57A5.9 5.9 0 0110 2zm8.9.2a.5.5 0 00-.7-.1l-2 1.5a.5.5 0 00.6.8l2-1.5a.5.5 0 00.1-.7zm.6 5.3A.5.5 0 0019 7h-1.5a.5.5 0 000 1H19a.5.5 0 00.5-.5z" />
		</svg>
	)
}
export default AlertOnIcon
