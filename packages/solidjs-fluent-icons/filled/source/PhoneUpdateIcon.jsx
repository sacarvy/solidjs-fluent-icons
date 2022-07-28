import { splitProps } from "solid-js"
function PhoneUpdateIcon(props) {
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
			<path d="M5 3.5C5 2.67 5.67 2 6.5 2h7c.83 0 1.5.67 1.5 1.5v13c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 015 16.5v-13zm5.5 3a.5.5 0 00-1 0v5.8l-1.15-1.15a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 00-.7-.7l-1.15 1.14V6.5z" />
		</svg>
	)
}
export default PhoneUpdateIcon
