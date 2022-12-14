import { splitProps, ComponentProps, JSX } from "solid-js"

function BookQuestionMarkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 4v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1V4a2 2 0 00-2-2H6a2 2 0 00-2 2zm10-1a1 1 0 011 1v11H5V4a1 1 0 011-1h8zM8.76 6.4c.19-.19.55-.4 1.24-.4s1.05.21 1.24.4c.2.22.26.47.26.6 0 .45-.27.7-.72.92a7 7 0 01-.35.16l-.02.01-.32.15c-.1.05-.24.12-.35.23A.73.73 0 009.5 9v1a.5.5 0 101 0v-.85l.04-.02.28-.13h.01a8 8 0 00.4-.18c.54-.27 1.27-.77 1.27-1.82 0-.37-.14-.87-.54-1.28C11.55 5.29 10.91 5 10 5c-.91 0-1.55.29-1.96.72-.4.41-.54.91-.54 1.28a.5.5 0 001 0 .9.9 0 01.26-.6zM10 13a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default BookQuestionMarkIcon
