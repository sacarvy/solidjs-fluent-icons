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
			<path d="M10 6a2 2 0 100-4 2 2 0 000 4zM5.47 4.15c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L6.7 8.53c.18.08.3.26.3.46v1.86a.5.5 0 01-.04.19l-1.84 4.55a1.75 1.75 0 003.25 1.32l.08-.22A5.48 5.48 0 0113 9.02V9c0-.2.12-.38.3-.46l2.67-1.19c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 00-2.32-.88l-1.28.57c-.24.1-.42.3-.52.52a3 3 0 01-5.46 0c-.1-.21-.28-.41-.52-.52l-1.28-.57zM18 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0l-2.65 2.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default AccessibilityCheckmarkIcon
