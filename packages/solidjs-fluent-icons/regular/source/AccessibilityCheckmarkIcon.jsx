import { splitProps } from "solid-js"
function AccessibilityCheckmarkIcon(props) {
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
			<path d="M8.5 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 2a2.5 2.5 0 00-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 003.25 1.32l.08-.22a5.46 5.46 0 01-.42-1.62l-.59 1.46a.75.75 0 11-1.39-.56l1.88-4.65a1 1 0 00.07-.37V8.66a1 1 0 00-.6-.91L4.45 6.43a.74.74 0 01-.37-.99.76.76 0 011-.38l3.91 1.75a2.5 2.5 0 002.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 00-.59.91v.55c.32-.1.66-.16 1-.19v-.36l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 00-2.32-.88l-2.1.93A2.51 2.51 0 0010 2zm8 12.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default AccessibilityCheckmarkIcon
