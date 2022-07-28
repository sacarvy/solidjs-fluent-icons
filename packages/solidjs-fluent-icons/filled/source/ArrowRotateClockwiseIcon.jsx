import { splitProps } from "solid-js"
function ArrowRotateClockwiseIcon(props) {
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
			<path d="M10 3.5A6.5 6.5 0 003.5 10 .75.75 0 012 10a8 8 0 1112.66 6.5h1.09a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v1.23A6.5 6.5 0 0010 3.5zm2.5 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM11 10a1 1 0 10-2 0 1 1 0 002 0z" />
		</svg>
	)
}
export default ArrowRotateClockwiseIcon
