import { splitProps } from "solid-js"
function CommentEditIcon(props) {
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
			<path d="M5.4 17.6a1 1 0 001.4.2L8 16.9l.05-.25.37-1.5a3.2 3.2 0 01.84-1.48l4.83-4.83A2.87 2.87 0 0118 8.7V5.57A2.58 2.58 0 0015.4 3H4.6A2.58 2.58 0 002 5.57v6.7a2.58 2.58 0 002.6 2.57h.6v2.17c0 .22.07.42.2.6zm9.4-8.05l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.07 1.07l1.5-.37c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 10-2.64-2.64z" />
		</svg>
	)
}
export default CommentEditIcon
