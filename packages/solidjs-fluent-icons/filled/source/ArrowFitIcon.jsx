import { splitProps } from "solid-js"
function ArrowFitIcon(props) {
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
			<path d="M5.8 6.72c.28.3.28.77-.01 1.06L4.57 9h3.68a.75.75 0 010 1.5H4.56l1.22 1.22a.75.75 0 11-1.06 1.06l-2.5-2.5a.75.75 0 010-1.06l2.51-2.5c.3-.3.77-.3 1.06 0zm8.42 0c.3-.3.77-.3 1.06 0l2.5 2.5c.3.3.3.77 0 1.06l-2.5 2.5a.75.75 0 11-1.06-1.06l1.22-1.22h-3.69a.75.75 0 010-1.5h3.69l-1.22-1.22a.75.75 0 010-1.06z" />
		</svg>
	)
}
export default ArrowFitIcon
