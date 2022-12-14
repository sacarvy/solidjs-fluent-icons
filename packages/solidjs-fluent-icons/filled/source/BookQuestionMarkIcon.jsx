import { splitProps } from "solid-js"
function BookQuestionMarkIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6zm2.76 4.4a.9.9 0 00-.26.6.5.5 0 01-1 0c0-.37.14-.87.54-1.28C8.45 5.29 9.09 5 10 5c.91 0 1.55.29 1.96.72.4.41.54.91.54 1.28 0 1.05-.73 1.55-1.28 1.82a8 8 0 01-.39.18h-.01a5.75 5.75 0 00-.32.15V10a.5.5 0 01-1 0V9c0-.25.13-.43.24-.53.11-.1.24-.18.35-.23l.32-.15.02-.01a7 7 0 00.35-.16c.45-.22.72-.47.72-.92a.9.9 0 00-.26-.6c-.19-.19-.55-.4-1.24-.4s-1.05.21-1.24.4zM10 13a.75.75 0 110-1.5.75.75 0 010 1.5z" />
		</svg>
	)
}
export default BookQuestionMarkIcon
