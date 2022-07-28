import { splitProps } from "solid-js"
function QuestionCircleIcon(props) {
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
			<path d="M10 2a8 8 0 110 16 8 8 0 010-16zm0 1a7 7 0 100 14 7 7 0 000-14zm0 10.5a.75.75 0 110 1.5.75.75 0 010-1.5zm0-8a2.5 2.5 0 011.65 4.38l-.15.12-.22.17-.09.07-.16.15c-.33.36-.53.85-.53 1.61a.5.5 0 01-1 0 3.2 3.2 0 011.16-2.62l.25-.19.12-.1A1.5 1.5 0 0010 6.5c-.83 0-1.5.67-1.5 1.5a.5.5 0 01-1 0A2.5 2.5 0 0110 5.5z" />
		</svg>
	)
}
export default QuestionCircleIcon
