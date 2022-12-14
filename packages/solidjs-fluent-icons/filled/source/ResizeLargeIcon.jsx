import { splitProps } from "solid-js"
function ResizeLargeIcon(props) {
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
			<path d="M5.5 4C4.67 4 4 4.67 4 5.5v1a.5.5 0 01-1 0v-1A2.5 2.5 0 015.5 3h1a.5.5 0 010 1h-1zm1 1C5.67 5 5 5.67 5 6.5v7c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5h-7zm8-1c.83 0 1.5.67 1.5 1.5v1a.5.5 0 001 0v-1A2.5 2.5 0 0014.5 3h-1a.5.5 0 000 1h1zm0 12c.83 0 1.5-.67 1.5-1.5v-1a.5.5 0 011 0v1a2.5 2.5 0 01-2.5 2.5h-1a.5.5 0 010-1h1zm-9 0A1.5 1.5 0 014 14.5v-1.25a.5.5 0 00-1 0v1.25A2.5 2.5 0 005.5 17h1.25a.5.5 0 000-1H5.5z" />
		</svg>
	)
}
export default ResizeLargeIcon
