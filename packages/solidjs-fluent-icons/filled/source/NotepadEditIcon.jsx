import { splitProps } from "solid-js"
function NotepadEditIcon(props) {
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
			<path d="M15.8 10.55l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64zM7 2.5a.5.5 0 00-1 0V3h-.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5H9l.06-.35.37-1.5a3.2 3.2 0 01.84-1.48l4.83-4.83c.27-.27.57-.47.9-.6V4.5c0-.83-.67-1.5-1.5-1.5H14v-.5a.5.5 0 00-1 0V3h-2.5v-.5a.5.5 0 00-1 0V3H7v-.5zM7.5 7h5a.5.5 0 010 1h-5a.5.5 0 010-1zm5.5 3.5a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5c.28 0 .5.22.5.5zM7.5 13h2a.5.5 0 010 1h-2a.5.5 0 010-1z" />
		</svg>
	)
}
export default NotepadEditIcon
