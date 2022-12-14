import { splitProps } from "solid-js"
function CommentNoteIcon(props) {
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
			<path d="M11.5 1c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-6zm1 5h4a.5.5 0 010 1h-4a.5.5 0 010-1zM12 3.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM4.6 3H9v4.5a2.5 2.5 0 002.5 2.5h6c.17 0 .34-.02.5-.05v2.33a2.58 2.58 0 01-2.6 2.56h-4.59L6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3z" />
		</svg>
	)
}
export default CommentNoteIcon
