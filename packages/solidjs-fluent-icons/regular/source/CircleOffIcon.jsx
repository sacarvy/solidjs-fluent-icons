import { splitProps } from "solid-js"
function CircleOffIcon(props) {
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
			<path d="M4 4.7L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7L15.29 16A8 8 0 014 4.7zm10.58 10.6L4.71 5.41a7 7 0 009.87 9.87zM17 10c0 1.39-.4 2.69-1.1 3.77l.72.73A8 8 0 005.5 3.39l.72.71A7 7 0 0117 10z" />
		</svg>
	)
}
export default CircleOffIcon
