import { splitProps } from "solid-js"
function FolderOpenVerticalIcon(props) {
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
			<path d="M4 3.5C4 2.67 4.67 2 5.5 2h9c.83 0 1.5.67 1.5 1.5v3.88c0 .12-.02.24-.04.36L15 11.56v2.94c0 .83-.67 1.5-1.5 1.5H12v.74a1.5 1.5 0 01-2.04 1.4L5.6 16.46A2.5 2.5 0 014 14.13V3.5zM7.19 3l3.21 1.24A2.5 2.5 0 0112 6.57V15h1.5a.5.5 0 00.5-.5v-3l.01-.12L15 7.5a.5.5 0 00.01-.12V3.5a.5.5 0 00-.5-.5H7.19zM5 3.96v10.17c0 .62.38 1.17.96 1.4l4.36 1.68a.5.5 0 00.68-.47V6.57a1.5 1.5 0 00-.96-1.4L5.68 3.5a.5.5 0 00-.68.47z" />
		</svg>
	)
}
export default FolderOpenVerticalIcon
