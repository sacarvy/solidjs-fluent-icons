import { splitProps } from "solid-js"
function NotebookAddIcon(props) {
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
			<path d="M5 2a2 2 0 00-2 2v5.6A5.5 5.5 0 019.74 18H13a2 2 0 002-2V4a2 2 0 00-2-2H5zm0 3c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-7A.5.5 0 015 7V5zm11 1h.5c.28 0 .5.22.5.5V8a.5.5 0 01-.5.5H16V6zm.5 3.5H16V12h.5a.5.5 0 00.5-.5V10a.5.5 0 00-.5-.5zM16 13h.5c.28 0 .5.22.5.5V15a.5.5 0 01-.5.5H16V13zm-6 1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5z" />
		</svg>
	)
}
export default NotebookAddIcon
