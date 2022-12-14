import { splitProps } from "solid-js"
function FluentIcon(props) {
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
			<path d="M10.28 2.05a.5.5 0 01.44 0l5 2.5a.5.5 0 010 .9l-4.1 2.05 4.1 2.05a.5.5 0 010 .9L11 12.8v4.69a.5.5 0 01-.76.43l-5-3A.5.5 0 015 14.5V5c0-.19.1-.36.28-.45l5-2.5zM11 11.7L14.38 10 11 8.3v3.4zm-1-3.38L6.62 10 10 11.7V8.3zm0-1.62V3.31L6.62 5 10 6.7zm-4-.88v3.38L9.38 7.5 6 5.8zm0 5v3.4l4 2.4v-3.8l-4-2zm5-7.5v3.38L14.38 5 11 3.3z" />
		</svg>
	)
}
export default FluentIcon
