import { splitProps } from "solid-js"
function CopyArrowRightIcon(props) {
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
			<path d="M6 4c0-1.1.9-2 2-2h6a2 2 0 012 2v5.2A5.5 5.5 0 009.2 16H8a2 2 0 01-2-2V4zm4.26 14a5.5 5.5 0 01-.66-1H7.5A2.5 2.5 0 015 14.5V4.27A2 2 0 004 6v8.5A3.5 3.5 0 007.5 18h2.76zm4.24-8a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default CopyArrowRightIcon
