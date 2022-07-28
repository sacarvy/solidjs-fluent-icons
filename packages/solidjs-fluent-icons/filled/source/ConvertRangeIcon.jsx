import { splitProps } from "solid-js"
function ConvertRangeIcon(props) {
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
			<path d="M5 2a2 2 0 00-2 2v2c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H5zm12.5 5c.28 0 .5.22.5.5v2a2.5 2.5 0 01-2.5 2.5h-1.8l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L13.71 11h1.79c.83 0 1.5-.67 1.5-1.5v-2c0-.28.22-.5.5-.5zm-5.62 3H5a2 2 0 00-2 2v4c0 1.1.9 2 2 2h8a2 2 0 002-2v-1.09a1.5 1.5 0 01-1.56-.35l-2-2a1.5 1.5 0 010-2.12l.44-.44zM6.5 14c0-.28.22-.5.5-.5h4a.5.5 0 010 1H7a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default ConvertRangeIcon
