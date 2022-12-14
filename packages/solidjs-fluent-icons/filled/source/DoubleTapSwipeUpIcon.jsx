import { splitProps } from "solid-js"
function DoubleTapSwipeUpIcon(props) {
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
			<path d="M10.53 2.22a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l1.22-1.22v7.69a.75.75 0 001.5 0V4.56l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5zM4.25 12.5a5.75 5.75 0 014-5.48v1.6a4.25 4.25 0 103.5 0v-1.6a5.75 5.75 0 11-7.5 5.48zm2.5 0c0-1.15.6-2.16 1.5-2.74v2.74a1.75 1.75 0 103.5 0V9.76a3.25 3.25 0 11-5 2.74z" />
		</svg>
	)
}
export default DoubleTapSwipeUpIcon
