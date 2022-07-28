import { splitProps } from "solid-js"
function AlbumAddIcon(props) {
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
			<path d="M4 4a2 2 0 00-2 2v3.26A5.49 5.49 0 014 8.2V4zm12 12h-5.6a5.48 5.48 0 000-5h3.1c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-4C8.67 7 8 7.67 8 8.5v.1a5.48 5.48 0 00-3-.58V4h11a2 2 0 012 2v8a2 2 0 01-2 2zm-2.5-6H9.74A5.53 5.53 0 009 9.26V8.5c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5zM10 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V13H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V14h1.5a.5.5 0 000-1H6v-1.5z" />
		</svg>
	)
}
export default AlbumAddIcon
