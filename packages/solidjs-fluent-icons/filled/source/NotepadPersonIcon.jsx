import { splitProps } from "solid-js"
function NotepadPersonIcon(props) {
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
			<path d="M7 2.5a.5.5 0 00-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h5.87a3.21 3.21 0 01-.37-1.5c0-1.3 1-2.38 2.27-2.49A2.99 2.99 0 0115.5 9c.17 0 .34.01.5.04V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 00-1 0V3h-2.5v-.5a.5.5 0 00-1 0V3H7v-.5zm0 5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm0 6c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zm0-3c0-.28.22-.5.5-.5H11a.5.5 0 010 1H7.5a.5.5 0 01-.5-.5zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default NotepadPersonIcon
