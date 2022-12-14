import { splitProps } from "solid-js"
function BatteryWarningIcon(props) {
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
			<path d="M2 7.5A2.5 2.5 0 014.5 5h9A2.5 2.5 0 0116 7.5v.83h1.17a.83.83 0 01.83.84v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-2.26L8.29 9.1a2 2 0 00-3.58 0l-2.34 4.7A2.49 2.49 0 012 12.5v-5zm3.6 2.05l-3.5 7A1 1 0 003 18h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM7 11.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zM6.5 17a.5.5 0 110-1 .5.5 0 010 1z" />
		</svg>
	)
}
export default BatteryWarningIcon
