import { splitProps } from "solid-js"
function ArrowClockwiseIcon(props) {
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
			<path d="M10.63 2.03A8 8 0 1018 9.73a.75.75 0 10-1.5.05c0 .25 0 .5-.02.73a6.5 6.5 0 11-1.56-4.75l.2.24h-2.37l-.1.01a.75.75 0 000 1.49H16.85c.33-.05.6-.31.64-.64V2.66a.75.75 0 00-.64-.65h-.2c-.34.05-.6.3-.65.64v2.06a7.98 7.98 0 00-5.37-2.68z" />
		</svg>
	)
}
export default ArrowClockwiseIcon
