import { splitProps } from "solid-js"
function VideoProhibitedIcon(props) {
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
			<path d="M2 6.5A2.5 2.5 0 014.5 4h7A2.5 2.5 0 0114 6.5v1l2.4-1.8a1 1 0 011.6.8v3.76a5.5 5.5 0 00-1-.66V6.5l-3 2.25v.27c-.34.03-.68.1-1 .19V6.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 5 3 5.67 3 6.5v7c0 .83.67 1.5 1.5 1.5h4.52c.03.34.1.68.19 1H4.5A2.5 2.5 0 012 13.5v-7zm8 8a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" />
		</svg>
	)
}
export default VideoProhibitedIcon
