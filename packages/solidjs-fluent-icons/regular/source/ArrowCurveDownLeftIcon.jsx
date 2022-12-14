import { splitProps } from "solid-js"
function ArrowCurveDownLeftIcon(props) {
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
			<path d="M13.26 2.93a.5.5 0 00-.52-.86A6.95 6.95 0 009.86 5.1C9.26 6.38 9 7.96 9 10v6.3l-3.15-3.15a.5.5 0 10-.7.7l4 4c.2.2.5.2.7 0l4-4a.5.5 0 00-.7-.7L10 16.29V10c0-1.96.25-3.38.76-4.47a5.96 5.96 0 012.5-2.6z" />
		</svg>
	)
}
export default ArrowCurveDownLeftIcon
