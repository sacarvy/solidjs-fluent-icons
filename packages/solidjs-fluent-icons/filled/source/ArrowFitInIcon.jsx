import { splitProps } from "solid-js"
function ArrowFitInIcon(props) {
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
			<path d="M5.21 7.78a.75.75 0 111.06-1.06l2.5 2.5a.75.75 0 01.01 1.06l-2.5 2.5a.75.75 0 01-1.06-1.06l1.22-1.22H2.75a.75.75 0 010-1.5h3.68L5.21 7.78zm9.58 0a.75.75 0 00-1.06-1.06l-2.5 2.5a.75.75 0 00-.01 1.06l2.5 2.5a.75.75 0 101.06-1.06l-1.22-1.22h3.69a.75.75 0 000-1.5h-3.68l1.22-1.22z" />
		</svg>
	)
}
export default ArrowFitInIcon
