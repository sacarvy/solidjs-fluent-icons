import { splitProps } from "solid-js"
function BoxArrowLeftIcon(props) {
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
			<path d="M17.42 5L14.38 6.2l-7.5-3 1.82-.73a3.5 3.5 0 012.6 0l5.76 2.3c.13.06.25.13.36.21zM10 7.95l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 00-.36.21L10 7.96zM2 6.18c0-.11.01-.22.04-.33L9.5 8.84v3.36a5.48 5.48 0 000 4.6v.93a3.5 3.5 0 01-.8-.21l-5.76-2.3a1.5 1.5 0 01-.94-1.4V6.18zm16 0v4.08a5.48 5.48 0 00-7.5.46V8.84l7.46-2.99c.03.1.04.22.04.33zm1 8.32a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-6.86-.35l2-2a.5.5 0 11.71.7L13.71 14h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 11-.7.7l-2-2a.5.5 0 01-.15-.35.5.5 0 01.14-.35z" />
		</svg>
	)
}
export default BoxArrowLeftIcon
