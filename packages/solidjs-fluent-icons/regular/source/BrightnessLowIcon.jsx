import { splitProps } from "solid-js"
function BrightnessLowIcon(props) {
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
			<path d="M10.5 3.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM10 6a4 4 0 100 8 4 4 0 000-8zm-3 4a3 3 0 116 0 3 3 0 01-6 0zm10 0a.5.5 0 01-.5.5h-1a.5.5 0 010-1h1c.28 0 .5.22.5.5zm-6.5 5.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM5 10a.5.5 0 01-.5.5h-1a.5.5 0 010-1h1c.28 0 .5.22.5.5zm.85-4.85a.5.5 0 10-.7.7l.5.5a.5.5 0 10.7-.7l-.5-.5zm-.7 9.7c.2.2.5.2.7 0l.5-.5a.5.5 0 00-.7-.7l-.5.5a.5.5 0 000 .7zm9-9.7a.5.5 0 01.7.7l-.5.5a.5.5 0 01-.7-.7l.5-.5zm.7 9.7a.5.5 0 01-.7 0l-.5-.5a.5.5 0 01.7-.7l.5.5c.2.2.2.5 0 .7z" />
		</svg>
	)
}
export default BrightnessLowIcon
