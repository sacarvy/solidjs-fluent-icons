import { splitProps } from "solid-js"
function ImageAltTextIcon(props) {
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
			<path d="M1 3c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2H3a2 2 0 01-2-2V3zm2 3.5c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zM3.5 3a.5.5 0 000 1h4a.5.5 0 000-1h-4zm9 5a.5.5 0 100-1 .5.5 0 000 1zM3 10h5a3 3 0 003-3V3h3a3 3 0 013 3v8c0 .65-.2 1.25-.56 1.74l-5.39-5.3a1.5 1.5 0 00-2.1 0l-5.4 5.3C3.22 15.25 3 14.64 3 14v-4zm9.5-1a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-8.23 7.45c.49.35 1.08.55 1.73.55h8c.65 0 1.24-.2 1.73-.55l-5.38-5.3a.5.5 0 00-.7 0l-5.38 5.3z" />
		</svg>
	)
}
export default ImageAltTextIcon
