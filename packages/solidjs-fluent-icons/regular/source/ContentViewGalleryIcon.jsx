import { splitProps } from "solid-js"
function ContentViewGalleryIcon(props) {
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
			<path d="M6 6a1 1 0 00-1 1v2a1 1 0 001 1h3a1 1 0 001-1V7a1 1 0 00-1-1H6zm0 1h3v2H6V7zm-1 4.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm8 10V4H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5zm3 0a2 2 0 002-2v-1h-4v3h2zm2-9V6a2 2 0 00-2-2h-2v3h4zm0 5V8h-4v4h4z" />
		</svg>
	)
}
export default ContentViewGalleryIcon
