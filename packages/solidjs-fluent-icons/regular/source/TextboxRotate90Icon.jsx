import { splitProps } from "solid-js"
function TextboxRotate90Icon(props) {
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
			<path d="M13 6.5a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm-3 0a.5.5 0 10-1 0v4a.5.5 0 001 0v-4zm-3 0a.5.5 0 00-1 0v7a.5.5 0 001 0v-7zm10 8a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zm-1 0v-9c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5z" />
		</svg>
	)
}
export default TextboxRotate90Icon
