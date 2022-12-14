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
			<path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v3.09a1.5 1.5 0 00-1 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v3.09a1.5 1.5 0 00-1 0V4zm0 9.91c.32.12.68.12 1 0V16a1 1 0 001 1h6a1 1 0 001-1v-2.09c.32.12.68.12 1 0V16a2 2 0 01-2 2H7a2 2 0 01-2-2v-2.09zm-1.85-3.76l2-2a.5.5 0 11.7.7L4.71 10H7.5a.5.5 0 010 1H4.7l1.15 1.15a.5.5 0 01-.7.7l-2-2A.5.5 0 013 10.5a.5.5 0 01.14-.35zm11.7 2.7l2-2a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 10H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7z" />
		</svg>
	)
}
export default PhoneSpanOutIcon
