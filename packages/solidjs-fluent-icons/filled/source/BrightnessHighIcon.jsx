import { splitProps } from "solid-js"
function BrightnessHighIcon(props) {
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
			<path d="M10.5 2.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM10 6a4 4 0 110 8 4 4 0 010-8zm3 4a3 3 0 00-3-3v6a3 3 0 003-3zm5 0a.5.5 0 01-.5.5h-1a.5.5 0 010-1h1c.28 0 .5.22.5.5zm-7.5 6.5a.5.5 0 00-1 0v1a.5.5 0 001 0v-1zM4 10a.5.5 0 01-.5.5H2.46a.5.5 0 010-1H3.5c.28 0 .5.22.5.5zm.85-5.85a.5.5 0 10-.7.7l1 1a.5.5 0 10.7-.7l-1-1zm-.7 11.7c.2.2.5.2.7 0l1-1a.5.5 0 00-.7-.7l-1 1a.5.5 0 000 .7zm11-11.7a.5.5 0 01.7.7l-1 1a.5.5 0 01-.7-.7l1-1zm.7 11.7a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l1 1c.2.2.2.5 0 .7z" />
		</svg>
	)
}
export default BrightnessHighIcon
