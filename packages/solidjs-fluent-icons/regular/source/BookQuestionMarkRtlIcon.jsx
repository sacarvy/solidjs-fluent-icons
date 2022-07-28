import { splitProps } from "solid-js"
function BookQuestionMarkRtlIcon(props) {
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
			<path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8zm-2.76 3.4c.2.22.26.47.26.6a.5.5 0 001 0c0-.37-.14-.87-.54-1.28C11.55 5.29 10.91 5 10 5c-.91 0-1.55.29-1.96.72-.4.41-.54.91-.54 1.28 0 1.05.73 1.55 1.28 1.82l.39.18h.01a5.75 5.75 0 01.32.15V10a.5.5 0 001 0V9a.73.73 0 00-.24-.53c-.11-.1-.24-.18-.35-.23l-.32-.15-.02-.01-.35-.16C8.77 7.7 8.5 7.45 8.5 7a.9.9 0 01.26-.6c.19-.19.55-.4 1.24-.4s1.05.21 1.24.4zM10 13a.75.75 0 110-1.5.75.75 0 010 1.5z" />
		</svg>
	)
}
export default BookQuestionMarkRtlIcon
