import { splitProps } from "solid-js"
function PredictionsIcon(props) {
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
			<path d="M14.5 1c.28 0 .5.22.5.5 0 .46.07 1.22.47 1.84.38.6 1.08 1.14 2.53 1.14a.5.5 0 110 1 3.5 3.5 0 00-1.82.73A2.77 2.77 0 0015 8.45a.5.5 0 01-.5.5.5.5 0 01-.5-.5c0-.5-.16-1.26-.6-1.88-.44-.6-1.16-1.1-2.4-1.1a.5.5 0 01-.5-.5c0-.27.22-.5.5-.5.51 0 1.25 0 1.87-.36.57-.33 1.13-1 1.13-2.61 0-.28.22-.5.5-.5zm.04 2.73a2.95 2.95 0 01-1.33 1.33 3.53 3.53 0 011.33 1.48 4.2 4.2 0 011.52-1.44 3.22 3.22 0 01-1.52-1.37zm-7.26 6.8A4.46 4.46 0 0110 2.5c.9 0 1.74.26 2.44.72a.99.99 0 00.32-.38c.06-.12.12-.28.16-.5A5.5 5.5 0 004.5 6.96c0 1.67.75 3.16 1.93 4.16l-1.22 4.44c-.17.62.08 1.35.74 1.64 1.64.73 4.65 1.35 7.97.01a1.43 1.43 0 00.82-1.75l-1.26-4.17a.49.49 0 00-.03-.07c.45-.36.85-.8 1.16-1.28a1.53 1.53 0 01-1.01-.3 4.5 4.5 0 01-6.32.89zm5.3 1.26l1.2 3.96c.07.24-.05.46-.23.54a9.36 9.36 0 01-7.19 0c-.14-.06-.24-.24-.18-.47l1.12-4.1a5.5 5.5 0 005.28.07z" />
		</svg>
	)
}
export default PredictionsIcon
