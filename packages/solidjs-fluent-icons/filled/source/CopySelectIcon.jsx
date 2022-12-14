import { splitProps } from "solid-js"
function CopySelectIcon(props) {
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
			<path d="M8 3a1 1 0 00-1 1v.5a.5.5 0 01-1 0V4c0-1.1.9-2 2-2h.5a.5.5 0 010 1H8zm-1 9a1 1 0 001 1h.5a.5.5 0 010 1H8a2 2 0 01-2-2v-.5a.5.5 0 011 0v.5zm0-5.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3zM16 3a1 1 0 011 1v.5a.5.5 0 001 0V4a2 2 0 00-2-2h-.5a.5.5 0 000 1h.5zm0 10a1 1 0 001-1v-.5a.5.5 0 011 0v.5a2 2 0 01-2 2h-.5a.5.5 0 010-1h.5zm1.5-7a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3a.5.5 0 00-.5-.5zm-7-4a.5.5 0 000 1h3a.5.5 0 000-1h-3zM10 13.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zM4 6h1v6.5A2.5 2.5 0 007.5 15H14v1a2 2 0 01-2 2H5.5A3.5 3.5 0 012 14.5V8c0-1.1.9-2 2-2z" />
		</svg>
	)
}
export default CopySelectIcon
