import { splitProps } from "solid-js"
function GlanceHorizontalIcon(props) {
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
			<path d="M17 15.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 019 15.5v-3c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5v3zm-1.5.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h5zM11 7.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 013 7.5v-3C3 3.67 3.67 3 4.5 3h5c.83 0 1.5.67 1.5 1.5v3zM9.5 8a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h5zm6 1c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5h-1c-.83 0-1.5.67-1.5 1.5v3c0 .83.67 1.5 1.5 1.5h1zm.5-1.5a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v3zm-9 8c0 .83-.67 1.5-1.5 1.5h-1A1.5 1.5 0 013 15.5v-3c0-.83.67-1.5 1.5-1.5h1c.83 0 1.5.67 1.5 1.5v3zm-1.5.5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-1a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h1z" />
		</svg>
	)
}
export default GlanceHorizontalIcon
