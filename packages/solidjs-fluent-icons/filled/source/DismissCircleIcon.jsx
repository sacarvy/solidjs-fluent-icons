import { splitProps } from "solid-js"
function DismissCircleIcon(props) {
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
			<path d="M10 2a8 8 0 110 16 8 8 0 010-16zM7.8 7.11a.5.5 0 00-.63.06l-.06.07a.5.5 0 00.06.64L9.3 10l-2.12 2.12-.06.07a.5.5 0 00.06.64l.07.06c.2.13.47.11.64-.06L10 10.7l2.12 2.12.07.06c.2.13.46.11.64-.06l.06-.07a.5.5 0 00-.06-.64L10.7 10l2.12-2.12.06-.07a.5.5 0 00-.06-.64l-.07-.06a.5.5 0 00-.64.06L10 9.3 7.88 7.17l-.07-.06z" />
		</svg>
	)
}
export default DismissCircleIcon
