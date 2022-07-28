import { splitProps } from "solid-js"
function StatusIcon(props) {
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
			<path d="M17.35 2.65a2.62 2.62 0 00-3.7 0l-5.5 5.5a.5.5 0 00-.14.23l-1 4a.5.5 0 00.61.6l4-1a.5.5 0 00.23-.13l5.5-5.5a2.62 2.62 0 000-3.7zm-1.4 6.53a6 6 0 11-5.12-5.12l.85-.86A7.02 7.02 0 003 10a7 7 0 1013.8-1.68l-.86.86z" />
		</svg>
	)
}
export default StatusIcon
