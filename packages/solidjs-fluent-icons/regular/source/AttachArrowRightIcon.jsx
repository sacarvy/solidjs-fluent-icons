import { splitProps } from "solid-js"
function AttachArrowRightIcon(props) {
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
			<path d="M4.83 10.48l5.65-5.65A3 3 0 0114.79 9c.4.02.78.08 1.14.18a4 4 0 00-6.14-5.07L4.12 9.78a.5.5 0 00.7.7zM8 15.78l1-.99c.02.42.09.83.2 1.21l-.5.5a2.5 2.5 0 11-3.53-3.54l6.01-6.01a.5.5 0 11.7.7l-6 6.02A1.5 1.5 0 008 15.79zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 10-.7.7L15.29 14H12.5a.5.5 0 100 1h2.8l-1.15 1.15a.5.5 0 10.7.7l2-2z" />
		</svg>
	)
}
export default AttachArrowRightIcon
