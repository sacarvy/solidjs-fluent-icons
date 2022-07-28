import { splitProps } from "solid-js"
function TableResizeColumnIcon(props) {
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
			<path d="M14 3a3 3 0 013 3v8a3 3 0 01-3 3v-4.38l.06-.06 1.5-1.5a1.5 1.5 0 000-2.12l-1.5-1.5a1.6 1.6 0 00-.06-.06V3zm-1 0v4a1.5 1.5 0 00-1.5 1.5h-3A1.5 1.5 0 007 7V3h6zm-4.94 9.56c-.3.3-.68.44-1.06.44v4h6v-4a1.5 1.5 0 01-1.5-1.5h-3c0 .38-.15.77-.44 1.06zM6 17v-4.38a1.55 1.55 0 01-.06-.06l-1.5-1.5a1.5 1.5 0 010-2.12l1.5-1.5.06-.06V3a3 3 0 00-3 3v8a3 3 0 003 3zm1.35-8.85c.2.2.2.5 0 .7l-.64.65h6.58l-.64-.65a.5.5 0 01.7-.7l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7l.64-.65H6.71l.64.65a.5.5 0 01-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default TableResizeColumnIcon
