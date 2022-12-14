import { splitProps } from "solid-js"
function DoubleTapSwipeDownIcon(props) {
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
			<path d="M10.35 17.85a.5.5 0 01-.7 0l-3-3a.5.5 0 01.7-.7l2.15 2.14V7.5a.5.5 0 011 0v8.8l2.15-2.15a.5.5 0 01.7.7l-3 3zM4.5 7.5a5.5 5.5 0 004 5.3v-1.06a4.5 4.5 0 113 0v1.05a5.5 5.5 0 10-7-5.29zm2 0c0 1.4.82 2.6 2 3.16V9.5a2.5 2.5 0 113 0v1.16a3.5 3.5 0 10-5-3.16z" />
		</svg>
	)
}
export default DoubleTapSwipeDownIcon
