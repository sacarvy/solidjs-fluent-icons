import { splitProps } from "solid-js"
function BoxMultipleIcon(props) {
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
			<path d="M13.58 2.38a3 3 0 00-2.16 0L7.96 3.71A1.5 1.5 0 007 5.11v1.1a4 4 0 011 0v-1.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 011.44 0l3.46 1.33c.2.08.32.26.32.47v7.78c0 .2-.13.4-.32.47L14 14.39v.5c0 .2-.03.4-.07.6l3.1-1.2c.59-.22.97-.78.97-1.4V5.11a1.5 1.5 0 00-.96-1.4l-3.46-1.33zm2.51 2.92a.5.5 0 00-.64-.3l-2.77 1.07a.5.5 0 01-.36 0L9.55 5.01a.5.5 0 10-.35.93l2.76 1.07c.35.13.73.13 1.08 0l2.76-1.07a.5.5 0 00.3-.64zm-5 5a.5.5 0 00-.64-.3L7.5 11.15l-2.95-1.13a.5.5 0 00-.35.93L7 12.02v2.49a.5.5 0 101 0v-2.49l2.8-1.08a.5.5 0 00.3-.64zM8.58 7.38a3 3 0 00-2.16 0L2.96 8.71a1.5 1.5 0 00-.96 1.4v4.78c0 .62.38 1.18.96 1.4l3.46 1.33a3 3 0 002.16 0l3.46-1.33c.58-.22.96-.78.96-1.4v-4.78a1.5 1.5 0 00-.96-1.4L8.58 7.38zm-1.8.93a2 2 0 011.44 0l3.46 1.33c.2.08.32.26.32.47v4.78c0 .2-.13.4-.32.47l-3.46 1.33a2 2 0 01-1.44 0l-3.46-1.33a.5.5 0 01-.32-.47v-4.78c0-.2.13-.4.32-.47l3.46-1.33z" />
		</svg>
	)
}
export default BoxMultipleIcon
