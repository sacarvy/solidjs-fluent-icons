import { splitProps } from "solid-js"
function BackspaceIcon(props) {
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
			<path d="M8.28 4a2.5 2.5 0 00-1.7.66L2.8 8.16a2.5 2.5 0 000 3.68l3.79 3.5a2.5 2.5 0 001.7.66h7.21a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4H8.28zm.87 3.15c.2-.2.5-.2.7 0L12 9.29l2.15-2.14a.5.5 0 01.7.7L12.71 10l2.14 2.15a.5.5 0 01-.7.7L12 10.71l-2.15 2.14a.5.5 0 01-.7-.7L11.29 10 9.15 7.85a.5.5 0 010-.7z" />
		</svg>
	)
}
export default BackspaceIcon
