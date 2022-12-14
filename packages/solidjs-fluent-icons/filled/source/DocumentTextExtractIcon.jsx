import { splitProps } from "solid-js"
function DocumentTextExtractIcon(props) {
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
			<path d="M10 6.5V2H5.5C4.67 2 4 2.67 4 3.5V11h5.5a1.5 1.5 0 010 3H4v2.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5zm-4 3c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 6c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm5-9V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zM2.5 12a.5.5 0 000 1h7a.5.5 0 000-1h-7z" />
		</svg>
	)
}
export default DocumentTextExtractIcon
