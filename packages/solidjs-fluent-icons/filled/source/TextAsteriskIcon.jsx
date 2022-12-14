import { splitProps } from "solid-js"
function TextAsteriskIcon(props) {
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
			<path d="M10.6 2.5a.6.6 0 10-1.2 0v6.05L5.12 4.27a.6.6 0 10-.85.85L8.55 9.4H2.5a.6.6 0 100 1.2h6.05l-4.28 4.28a.6.6 0 00.85.85l4.28-4.28v6.05a.6.6 0 101.2 0v-6.05l4.28 4.28a.6.6 0 00.85-.85l-4.28-4.28h6.05a.6.6 0 100-1.2h-6.05l4.28-4.28a.6.6 0 00-.85-.85L10.6 8.55V2.5z" />
		</svg>
	)
}
export default TextAsteriskIcon
