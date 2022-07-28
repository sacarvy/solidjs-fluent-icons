import { splitProps } from "solid-js"
function HeartCircleIcon(props) {
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
			<path d="M2 10a8 8 0 1016 0 8 8 0 00-16 0zm7.6-2.39l.39.4.4-.4a2.12 2.12 0 013.03 2.96l-3.05 3.27a.5.5 0 01-.74 0l-3.06-3.28A2.11 2.11 0 019.6 7.61z" />
		</svg>
	)
}
export default HeartCircleIcon
