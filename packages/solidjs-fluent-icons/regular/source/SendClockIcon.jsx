import { splitProps } from "solid-js"
function SendClockIcon(props) {
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
			<path d="M18.08 8.62L2.72 1.05a.5.5 0 00-.7.58l1.97 7.44-1.97 7.43a.5.5 0 00.7.58l6.3-3.1c.05-.44.14-.86.27-1.25L3.27 15.7 4.9 9.5a.5.5 0 00.09 0h7.09a.5.5 0 00-.09-1H4.94l-.07.02-1.6-6.09 13.17 6.5 1.44.68.2-.1a.5.5 0 000-.9zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 12a.5.5 0 00-.5.5v2c0 .28.22.5.5.5H16a.5.5 0 000-1h-1v-1.5a.5.5 0 00-.5-.5z" />
		</svg>
	)
}
export default SendClockIcon
