import { splitProps } from "solid-js"
function PhoneSpanInIcon(props) {
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
			<path d="M7 2a2 2 0 00-2 2v3.09a1.5 1.5 0 011.56.35l2 2a1.5 1.5 0 010 2.12l-2 2a1.5 1.5 0 01-1.56.35V16c0 1.1.9 2 2 2h6a2 2 0 002-2v-2.09a1.5 1.5 0 01-1.56-.35l-2-2a1.5 1.5 0 010-2.12l2-2A1.5 1.5 0 0115 7.09V4a2 2 0 00-2-2H7zm7.85 6.15c.2.2.2.5 0 .7L13.71 10h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0zm-9.7.7a.5.5 0 11.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L6.29 11H3.5a.5.5 0 010-1h2.8L5.14 8.85z" />
		</svg>
	)
}
export default PhoneSpanInIcon
