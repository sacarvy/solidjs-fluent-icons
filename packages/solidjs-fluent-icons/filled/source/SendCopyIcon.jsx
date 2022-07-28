import { splitProps } from "solid-js"
function SendCopyIcon(props) {
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
			<path d="M8.47 2.22c.3-.3.77-.3 1.06 0l2.5 2.5a.75.75 0 01-1.06 1.06L9.75 4.56v6.69a.75.75 0 01-1.5 0V4.56L7.03 5.78a.75.75 0 01-1.06-1.06l2.5-2.5zM5.57 16.5A2 2 0 007.5 18H13a4.5 4.5 0 004.5-4.5v-2.25a.75.75 0 00-1.5 0v2.25a3 3 0 01-3 3H5.57zM4.5 8.75a.75.75 0 00-1.5 0v4.75c0 1.1.9 2 2 2h8a2 2 0 002-2V8.75a.75.75 0 00-1.5 0v4.75a.5.5 0 01-.5.5H5a.5.5 0 01-.5-.5V8.75z" />
		</svg>
	)
}
export default SendCopyIcon
