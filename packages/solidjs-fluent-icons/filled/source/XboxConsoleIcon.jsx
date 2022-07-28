import { splitProps } from "solid-js"
function XboxConsoleIcon(props) {
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
			<path d="M4.5 2a.5.5 0 00-.5.5v15c0 .28.22.5.5.5H7V9.5a.5.5 0 011 0V18h7.5a.5.5 0 00.5-.5v-15a.5.5 0 00-.5-.5h-11zm3 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
		</svg>
	)
}
export default XboxConsoleIcon
