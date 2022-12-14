import { splitProps } from "solid-js"
function MicIcon(props) {
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
			<path d="M5.5 10a.5.5 0 00-1 0 5.5 5.5 0 005 5.48v2.02a.5.5 0 001 0v-2.02c2.8-.26 5-2.61 5-5.48a.5.5 0 00-1 0 4.5 4.5 0 11-9 0zm7.5 0a3 3 0 01-6 0V5a3 3 0 016 0v5z" />
		</svg>
	)
}
export default MicIcon
