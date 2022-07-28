import { splitProps } from "solid-js"
function ArchiveArrowBackIcon(props) {
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
			<path d="M8.5 10a.5.5 0 000 1h1.76c.31-.38.67-.72 1.08-1H8.5zM6 16h3.2c.1.35.24.68.4 1H6a3 3 0 01-3-3V7.83c-.6-.28-1-.88-1-1.58v-1.5C2 3.78 2.78 3 3.75 3h12.5c.97 0 1.75.78 1.75 1.75v1.5c0 .7-.4 1.3-1 1.58V9.6c-.32-.16-.65-.3-1-.4V8H4v6c0 1.1.9 2 2 2zM3.75 4a.75.75 0 00-.75.75v1.5c0 .41.34.75.75.75h12.5c.41 0 .75-.34.75-.75v-1.5a.75.75 0 00-.75-.75H3.75zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 0117 16.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75h-1.54l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7l1.76-1.75a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default ArchiveArrowBackIcon
