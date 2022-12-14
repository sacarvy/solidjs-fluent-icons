import { splitProps } from "solid-js"
function ScanTypeIcon(props) {
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
			<path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v1.5a.75.75 0 01-1.5 0v-1.5A2.75 2.75 0 014.75 2h1.5a.75.75 0 010 1.5h-1.5zm0 13c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 00-1.5 0v1.5A2.75 2.75 0 004.75 18h1.5a.75.75 0 000-1.5h-1.5zM16.5 4.75c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 010-1.5h1.5A2.75 2.75 0 0118 4.75v1.5a.75.75 0 01-1.5 0v-1.5zM15.25 16.5c.69 0 1.25-.56 1.25-1.25v-1.5a.75.75 0 011.5 0v1.5A2.75 2.75 0 0115.25 18h-1.5a.75.75 0 010-1.5h1.5zM6.5 5a.75.75 0 00-.75.75v1a.75.75 0 001.5 0V6.5h2v7H9A.75.75 0 009 15h2a.75.75 0 000-1.5h-.25v-7h2v.25a.75.75 0 001.5 0v-1A.75.75 0 0013.5 5h-7z" />
		</svg>
	)
}
export default ScanTypeIcon
