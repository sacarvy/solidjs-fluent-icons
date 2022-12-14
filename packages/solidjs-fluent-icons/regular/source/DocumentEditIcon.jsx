import { splitProps } from "solid-js"
function DocumentEditIcon(props) {
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
			<path d="M11.5 8H16v-.59a1.5 1.5 0 00-.06-.4V7a1.5 1.5 0 00-.38-.65l-3.91-3.91A1.5 1.5 0 0010.59 2H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h2.22l-.01-.03A1.86 1.86 0 018 17H6a1 1 0 01-1-1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5zm0-1a.5.5 0 01-.5-.5V3.2L14.8 7h-3.3zm3.3 2.55a1.87 1.87 0 112.65 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02l4.83-4.83z" />
		</svg>
	)
}
export default DocumentEditIcon
