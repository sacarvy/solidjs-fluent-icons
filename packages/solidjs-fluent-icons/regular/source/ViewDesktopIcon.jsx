import { splitProps } from "solid-js"
function ViewDesktopIcon(props) {
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
			<path d="M4 5.5c0-.28.22-.5.5-.5h1c.27 0 .5.22.5.5v6a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-6zM7.5 5a.5.5 0 00-.5.5v6c0 .28.22.5.5.5h8a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-8zm-5.54-.5c0-.83.67-1.5 1.5-1.5H16.4c.83 0 1.5.67 1.5 1.5v8c0 .83-.67 1.5-1.5 1.5H12v2.01h1.5a.5.5 0 010 1h-7a.5.5 0 110-1H8V14H3.46a1.5 1.5 0 01-1.5-1.5v-8zM9 14v2.01h2V14H9zM3.46 4a.5.5 0 00-.5.5v8c0 .28.23.5.5.5H16.4a.5.5 0 00.5-.5v-8a.5.5 0 00-.5-.5H3.46z" />
		</svg>
	)
}
export default ViewDesktopIcon
