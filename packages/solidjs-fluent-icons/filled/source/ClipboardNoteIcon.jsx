import { splitProps } from "solid-js"
function ClipboardNoteIcon(props) {
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
			<path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V10h-4a3 3 0 00-3 3v4a3 3 0 00.17 1H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm3.5 8a2 2 0 00-2 2v4c0 1.1.9 2 2 2h5a2 2 0 002-2v-4a2 2 0 00-2-2h-5zm0 5.5c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5zm0-3c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default ClipboardNoteIcon
