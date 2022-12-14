import { splitProps } from "solid-js"
function QuestionIcon(props) {
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
			<path d="M10 3a4 4 0 00-4 4 .75.75 0 001.5 0A2.5 2.5 0 0110 4.5 2.5 2.5 0 0112.5 7c0 .6-.16.97-.37 1.27a5 5 0 01-.97.92c-.4.33-.9.73-1.28 1.3-.39.58-.63 1.3-.63 2.26v.5a.75.75 0 001.5 0v-.5c0-.67.16-1.1.38-1.43.23-.35.55-.62.97-.96l.06-.05c.38-.3.84-.67 1.2-1.17C13.74 8.6 14 7.9 14 7a4 4 0 00-4-4zm0 14a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default QuestionIcon
