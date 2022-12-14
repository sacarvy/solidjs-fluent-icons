import { splitProps } from "solid-js"
function TextAddTIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
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
			<path d="M4 4.75c0-.41.34-.75.75-.75h12.5c.41 0 .75.34.75.75v2a.75.75 0 01-1.5 0V5.5h-4.75v8.97A6.47 6.47 0 0011.5 20H8.75a.75.75 0 010-1.5h1.5v-13H5.5v1.25a.75.75 0 01-1.5 0v-2zM23 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5 .5v2.5a.5.5 0 11-1 0V18h-2.5a.5.5 0 010-1H17v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H18z" />
		</svg>
	)
}
export default TextAddTIcon
