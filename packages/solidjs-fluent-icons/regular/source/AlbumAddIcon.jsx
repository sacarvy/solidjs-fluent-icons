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
			<path d="M2 6c0-1.1.9-2 2-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-5.6c.16-.32.3-.65.4-1H16a1 1 0 001-1V6a1 1 0 00-1-1H6v3.02a5.57 5.57 0 00-1 0V5H4a1 1 0 00-1 1v2.6c-.36.18-.7.4-1 .66V6zm11.5 5h-3.1a5.5 5.5 0 00-.66-1h3.76a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-4a.5.5 0 00-.5.5v.76a5.5 5.5 0 00-1-.66v-.1C8 7.67 8.67 7 9.5 7h4c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5zM10 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V13H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V14h1.5a.5.5 0 000-1H6v-1.5z" />
		</svg>
	)
}
export default AlbumAddIcon
