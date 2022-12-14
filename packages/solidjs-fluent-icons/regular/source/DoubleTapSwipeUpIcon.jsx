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
			<path d="M10.35 2.15a.5.5 0 00-.7 0l-3 3a.5.5 0 10.7.7L9.5 3.71v8.79a.5.5 0 001 0V3.7l2.15 2.15a.5.5 0 00.7-.7l-3-3zM4.5 12.5a5.5 5.5 0 014-5.3v1.06a4.5 4.5 0 103 0V7.2a5.5 5.5 0 11-7 5.29zm2 0c0-1.4.82-2.6 2-3.16v1.16a2.5 2.5 0 103 0V9.34a3.5 3.5 0 11-5 3.16z" />
		</svg>
	)
}
export default DoubleTapSwipeUpIcon
