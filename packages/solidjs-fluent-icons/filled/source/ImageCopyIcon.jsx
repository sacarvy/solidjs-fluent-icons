import { splitProps } from "solid-js"
function ImageCopyIcon(props) {
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
			<path d="M5 6a3 3 0 013-3h6a3 3 0 013 3v6c0 .65-.2 1.25-.55 1.74L12.2 9.5a1.71 1.71 0 00-2.42 0l-4.24 4.24A2.99 2.99 0 015 12V6zm3.5 1.5a1 1 0 100-2 1 1 0 000 2zm3 2.7l4.24 4.25c-.5.34-1.1.55-1.74.55H8c-.65 0-1.25-.2-1.74-.55l4.24-4.24a.71.71 0 011 0zm2.74 5.8A3 3 0 0112 17H7.5A4.5 4.5 0 013 12.5V8a3 3 0 011-2.24v6.74A3.5 3.5 0 007.5 16h6.74z" />
		</svg>
	)
}
export default ImageCopyIcon
