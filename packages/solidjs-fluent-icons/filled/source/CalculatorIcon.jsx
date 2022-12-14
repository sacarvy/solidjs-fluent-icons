import { splitProps } from "solid-js"
function CalculatorIcon(props) {
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
			<path d="M13.5 2h-7A2.5 2.5 0 004 4.5v11A2.5 2.5 0 006.5 18h7a2.5 2.5 0 002.5-2.5v-11A2.5 2.5 0 0013.5 2zm-6 2h5c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 6.5v-1C6 4.67 6.67 4 7.5 4zm.5 7a1 1 0 11-2 0 1 1 0 012 0zm0 3a1 1 0 11-2 0 1 1 0 012 0zm5-2a1 1 0 110-2 1 1 0 010 2zm1 2a1 1 0 11-2 0 1 1 0 012 0zm-4-2a1 1 0 110-2 1 1 0 010 2zm1 2a1 1 0 11-2 0 1 1 0 012 0z" />
		</svg>
	)
}
export default CalculatorIcon
