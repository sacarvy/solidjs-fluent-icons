import { splitProps } from "solid-js"
function PhoneSpanInIcon(props) {
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
			<path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v3.09a1.5 1.5 0 00-1 0V4a1 1 0 00-1-1H7a1 1 0 00-1 1v3.09a1.5 1.5 0 00-1 0V4zm0 9.91V16c0 1.1.9 2 2 2h6a2 2 0 002-2v-2.09a1.5 1.5 0 01-1 0V16a1 1 0 01-1 1H7a1 1 0 01-1-1v-2.09a1.5 1.5 0 01-1 0zm2.85-3.06l-2 2a.5.5 0 01-.7-.7L6.29 11H3.5a.5.5 0 010-1h2.8L5.14 8.85a.5.5 0 11.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35zm6.3-2.7l-2 2a.5.5 0 00-.15.35.5.5 0 00.15.35l2 2a.5.5 0 00.7-.7L13.71 11h2.79a.5.5 0 000-1h-2.8l1.15-1.15a.5.5 0 00-.7-.7z" />
		</svg>
	)
}
export default PhoneSpanInIcon
