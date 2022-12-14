import { splitProps } from "solid-js"
function BookNumberIcon(props) {
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
			<path d="M9.61 8h.98l-.2 1h-.98l.2-1zM6 2a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 100-1H6a1 1 0 01-1-1h10.5a.5.5 0 00.5-.5V4a2 2 0 00-2-2H6zm5.6 3.51a.5.5 0 01.4.59l-.19.9h.94a.5.5 0 010 1h-1.14l-.2 1h1.1a.5.5 0 110 1h-1.3L11 11.1a.5.5 0 01-.98-.2l.18-.9h-.98l-.22 1.1a.5.5 0 11-.98-.2l.18-.9h-.94a.5.5 0 010-1H8.4l.2-1H7.5a.5.5 0 010-1h1.29l.22-1.1a.5.5 0 01.98.2l-.18.9h.98l.22-1.1a.5.5 0 01.59-.39z" />
		</svg>
	)
}
export default BookNumberIcon
