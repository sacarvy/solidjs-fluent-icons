import { splitProps } from "solid-js"
function PhoneSpanOutIcon(props) {
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
			<path d="M7 2a2 2 0 00-2 2v3.09A1.5 1.5 0 016.91 9h.59a1.5 1.5 0 110 3h-.59A1.5 1.5 0 015 13.91V16c0 1.1.9 2 2 2h6a2 2 0 002-2v-2.09A1.5 1.5 0 0113.09 12h-.59a1.5 1.5 0 010-3h.59A1.5 1.5 0 0115 7.09V4a2 2 0 00-2-2H7zm7.85 6.15a.5.5 0 00-.7.7L15.29 10H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2zM4.71 10l1.14-1.15h.01a.5.5 0 00-.71-.7l-2 2a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L4.71 11H7.5a.5.5 0 00.5-.5.5.5 0 00-.5-.5H4.7z" />
		</svg>
	)
}
export default PhoneSpanOutIcon
