import { splitProps } from "solid-js"
function NewsIcon(props) {
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
			<path d="M5 12v-2h2v2H5zm10-7.5c0-.83-.67-1.5-1.5-1.5H3.42c-.83 0-1.5.67-1.5 1.5v9a2.5 2.5 0 002.5 2.5h11.16a2.5 2.5 0 002.5-2.5v-6c0-.83-.67-1.5-1.5-1.5H16v7.23a.5.5 0 01-1 0V4.5zm-11 2c0-.28.22-.5.5-.5h8a.5.5 0 010 1h-8a.5.5 0 01-.5-.5zM9.5 9h3a.5.5 0 010 1h-3a.5.5 0 010-1zM9 12.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM4.5 9h3c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default NewsIcon
