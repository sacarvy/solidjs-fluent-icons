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
			<path d="M10 3c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm0 3a4 4 0 100 8 4 4 0 000-8zm0 7V7a3 3 0 110 6zm6.5-2.5a.5.5 0 000-1h-1a.5.5 0 000 1h1zM10 15c.28 0 .5.22.5.5v1a.5.5 0 01-1 0v-1c0-.28.22-.5.5-.5zm-5.5-4.5a.5.5 0 000-1h-1a.5.5 0 000 1h1zm.65-5.35c.2-.2.5-.2.7 0l.5.5a.5.5 0 11-.7.7l-.5-.5a.5.5 0 010-.7zm.7 9.7a.5.5 0 01-.7-.7l.5-.5a.5.5 0 01.7.7l-.5.5zm9-9.7a.5.5 0 00-.7 0l-.5.5a.5.5 0 00.7.7l.5-.5a.5.5 0 000-.7zm-.7 9.7a.5.5 0 00.7-.7l-.5-.5a.5.5 0 00-.7.7l.5.5z" />
		</svg>
	)
}
export default BrightnessLowIcon
