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
			<path d="M3 1a2 2 0 00-2 2v4c0 1.1.9 2 2 2h5a2 2 0 002-2V3a2 2 0 00-2-2H3zm.5 5h4a.5.5 0 010 1h-4a.5.5 0 010-1zM3 3.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM3 14v-4h1v4c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 012.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 00-2-2h-3V3h3a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3zm3 2h8a2 2 0 001.01-.27l-4.66-4.58a.5.5 0 00-.7 0l-4.66 4.58A2 2 0 006 16zm6.5-7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm.5-1.5a.5.5 0 10-1 0 .5.5 0 001 0z" />
		</svg>
	)
}
export default ImageAltTextIcon
