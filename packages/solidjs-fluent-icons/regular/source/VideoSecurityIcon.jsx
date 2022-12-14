import { splitProps } from "solid-js"
function VideoSecurityIcon(props) {
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
			<path d="M2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v.9l3.25-1.84a.5.5 0 01.75.44v7a.5.5 0 01-.75.44L14 10.1v.9a2 2 0 01-2 2h-2v1a4 4 0 01-4 4H3.5a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h2c.83 0 1.5-.67 1.5-1.5V13H4a2 2 0 01-2-2V5zm6 8v.5A2.5 2.5 0 015.5 16H4v1h2a3 3 0 003-3v-1H8zm-4-1h8a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v6a1 1 0 001 1zm10-4.96v1.91l3 1.7v-5.3l-3 1.69z" />
		</svg>
	)
}
export default VideoSecurityIcon
