import { splitProps } from "solid-js"
function ImportantIcon(props) {
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
			<path d="M10 2a3 3 0 00-3 3c0 2.23.79 5.2 1.22 6.69.24.79.97 1.31 1.78 1.31s1.54-.52 1.78-1.31C12.2 10.2 13 7.25 13 5a3 3 0 00-3-3zm0 12a2 2 0 100 4 2 2 0 000-4z" />
		</svg>
	)
}
export default ImportantIcon
