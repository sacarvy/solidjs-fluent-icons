import { splitProps } from "solid-js"
function CommentOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l.76.77C2.35 4.09 2 4.79 2 5.57v6.7a2.58 2.58 0 002.6 2.57h.6v2.17c0 .22.07.42.2.6a1 1 0 001.4.2l4.01-2.97h3.33l3 3.01a.5.5 0 00.71-.7l-2.3-2.31L3.82 3.12l-.97-.97zM18 12.28c0 .97-.55 1.81-1.35 2.25L5.12 3H15.4C16.84 3 18 4.15 18 5.57v6.7z" />
		</svg>
	)
}
export default CommentOffIcon
