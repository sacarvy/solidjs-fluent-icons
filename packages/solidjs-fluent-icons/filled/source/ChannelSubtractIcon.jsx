import { splitProps } from "solid-js"
function ChannelSubtractIcon(props) {
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
			<path d="M3.2 4.52A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v4.1a5.48 5.48 0 00-6.74 1.4H7.5a.5.5 0 000 1h2.1a5.48 5.48 0 000 5H5.5A2.5 2.5 0 013 14.5V8.44a2 2 0 10.2-3.92zM7.5 8a.5.5 0 000 1h5a.5.5 0 000-1h-5zM3 5.63a1 1 0 111 1.73 1 1 0 01-1-1.73zM14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2-4h-4a.5.5 0 010-1h4a.5.5 0 010 1z" />
		</svg>
	)
}
export default ChannelSubtractIcon
