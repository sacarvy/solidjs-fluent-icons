import { splitProps } from "solid-js"
function JoystickIcon(props) {
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
			<path d="M10.5 7.96a3 3 0 10-1 0V11h-2c-.83 0-1.5.67-1.5 1.5v.5h8v-.5c0-.83-.67-1.5-1.5-1.5h-2V7.96zM3 16c0-1.1.9-2 2-2h10a2 2 0 012 2v1.5a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5V16z" />
		</svg>
	)
}
export default JoystickIcon
