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
			<path d="M6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6zm5.24 4.4c-.19-.19-.55-.4-1.24-.4s-1.05.21-1.24.4a.9.9 0 00-.26.6c0 .45.27.7.72.92l.35.16.02.01.32.15c.1.05.24.12.35.23.11.1.24.28.24.53v1a.5.5 0 11-1 0v-.85l-.04-.02A5.75 5.75 0 009.18 9h-.01a7.97 7.97 0 01-.4-.18C8.24 8.55 7.5 8.05 7.5 7c0-.37.14-.87.54-1.28C8.45 5.29 9.09 5 10 5c.91 0 1.55.29 1.96.72.4.41.54.91.54 1.28a.5.5 0 01-1 0 .9.9 0 00-.26-.6zM10 13a.75.75 0 110-1.5.75.75 0 010 1.5z" />
		</svg>
	)
}
export default BookQuestionMarkRtlIcon
