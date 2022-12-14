import { splitProps } from "solid-js"
function CalculatorArrowClockwiseIcon(props) {
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
			<path d="M7 12a1 1 0 100-2 1 1 0 000 2zm0 3a1 1 0 100-2 1 1 0 000 2zm2.63-3.07c.3-.58.7-1.1 1.17-1.52a1 1 0 10-1.17 1.52zM6.5 17h3.11c.18.36.4.7.66 1H6.5A2.5 2.5 0 014 15.5v-11A2.5 2.5 0 016.5 2h7A2.5 2.5 0 0116 4.5v4.69c-.32-.1-.66-.16-1-.19V4.5c0-.83-.67-1.5-1.5-1.5h-7C5.67 3 5 3.67 5 4.5v11c0 .83.67 1.5 1.5 1.5zM6 5.5C6 4.67 6.67 4 7.5 4h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 6.5v-1zM7.5 5a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5zm10 7.48a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.76a4.5 4.5 0 102 3.74.5.5 0 10-1 0 3.5 3.5 0 11-1.7-3h-.8a.5.5 0 100 1h2z" />
		</svg>
	)
}
export default CalculatorArrowClockwiseIcon
