import { splitProps } from "solid-js"
function DocumentQueueAddIcon(props) {
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
			<path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5v11c0 .83.67 1.5 1.5 1.5h3.7A5.5 5.5 0 0116 9.2V8h-4.5A1.5 1.5 0 0110 6.5zm-4-1c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM6.5 7h2a.5.5 0 010 1h-2a.5.5 0 010-1zM6 9.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM5.5 17h4.1c.18.36.4.7.66 1H5.5A3.5 3.5 0 012 14.5v-1a.5.5 0 011 0v1A2.5 2.5 0 005.5 17zM11 6.5V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zm8 8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default DocumentQueueAddIcon
