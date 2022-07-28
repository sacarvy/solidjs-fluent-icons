import { splitProps } from "solid-js"
function ChevronRightIcon(props) {
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
			<path d="M7.73 4.2a.75.75 0 011.06.03l5 5.25c.28.3.28.75 0 1.04l-5 5.25a.75.75 0 11-1.08-1.04L12.2 10l-4.5-4.73a.75.75 0 01.02-1.06z" />
		</svg>
	)
}
export default ChevronRightIcon
