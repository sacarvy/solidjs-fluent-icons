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
			<path d="M10 3a2 2 0 00-2 2c0 2.07.75 4.91 1.18 6.4.1.36.44.6.82.6.39 0 .71-.24.82-.6C11.25 9.94 12 7.1 12 5a2 2 0 00-2-2zM7 5a3 3 0 016 0c0 2.25-.79 5.21-1.22 6.69-.24.8-.97 1.31-1.78 1.31s-1.54-.52-1.78-1.31C7.8 10.2 7 7.23 7 5zm3 10a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z" />
		</svg>
	)
}
export default ImportantIcon
