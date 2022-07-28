import { splitProps } from "solid-js"
function DocumentCopyIcon(props) {
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
			<path d="M11 6.5V2H7.5C6.67 2 6 2.67 6 3.5v11c0 .83.67 1.5 1.5 1.5h8c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0111 6.5zm1 0V2.25L16.75 7H12.5a.5.5 0 01-.5-.5zM4 5a1 1 0 011-1v10.5A2.5 2.5 0 007.5 17H15a1 1 0 01-1 1H7.55A3.55 3.55 0 014 14.45V5z" />
		</svg>
	)
}
export default DocumentCopyIcon
