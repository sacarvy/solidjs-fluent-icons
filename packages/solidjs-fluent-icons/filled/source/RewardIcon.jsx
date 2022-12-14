import { splitProps } from "solid-js"
function RewardIcon(props) {
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
			<path d="M15.53 3c.82 0 1.5.67 1.5 1.5v1.4c0 .93-.53 1.8-1.37 2.22l-4.19 2.14a3.54 3.54 0 11-2.92 0L4.36 8.12a2.5 2.5 0 01-1.35-2.04L3 5.9V4.5C3 3.67 3.67 3 4.5 3h11.03zM10 10.95a2.54 2.54 0 100 5.07 2.54 2.54 0 000-5.07zM12.61 4h-5.2v4.55l2.38 1.22a.5.5 0 00.45 0l2.38-1.22V4z" />
		</svg>
	)
}
export default RewardIcon
