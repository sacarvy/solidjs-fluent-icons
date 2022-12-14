import { splitProps } from "solid-js"
function CallProhibitedIcon(props) {
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
			<path d="M17.96 6.94l-.16.83c-.15.78-.87 1.3-1.7 1.22l-1.63-.16c-.72-.07-1.25-.59-1.47-1.33-.3-1-.5-1.75-.5-1.75a6.63 6.63 0 00-5 0S7.3 6.5 7 7.5c-.2.67-.5 1.26-1.2 1.33l-1.63.16c-.81.08-1.6-.43-1.82-1.2l-.25-.84c-.25-.82-.03-1.7.58-2.28C4.1 3.3 6.67 2.51 9.99 2.5c3.33 0 5.6.78 7.16 2.16.66.58.97 1.46.8 2.28zM6.82 16.68a4.5 4.5 0 106.36-6.36 4.5 4.5 0 00-6.36 6.36zm5.65-.7a3.5 3.5 0 01-4.57.32l4.9-4.9a3.5 3.5 0 01-.33 4.57zm-.37-5.28l-4.9 4.9a3.5 3.5 0 014.9-4.9z" />
		</svg>
	)
}
export default CallProhibitedIcon
