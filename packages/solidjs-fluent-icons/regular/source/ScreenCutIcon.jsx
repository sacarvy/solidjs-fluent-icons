import { splitProps } from "solid-js"
function ScreenCutIcon(props) {
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
			<path d="M4 5a1 1 0 00-1 1v.5a.5.5 0 11-1 0V6c0-1.1.9-2 2-2h.5a.5.5 0 010 1H4z" />
			<path d="M3 13a1 1 0 001 1h.25a.5.5 0 010 1H4a2 2 0 01-2-2v-.5a.5.5 0 011 0v.5z" />
			<path d="M3 8.5a.5.5 0 00-1 0v2a.5.5 0 101 0v-2z" />
			<path d="M16 5a1 1 0 011 1v.5a.5.5 0 001 0V6a2 2 0 00-2-2h-.5a.5.5 0 000 1h.5z" />
			<path d="M16 14a1 1 0 001-1v-.5a.5.5 0 011 0v.5a2 2 0 01-2 2h-.25a.5.5 0 010-1H16z" />
			<path d="M17.5 8a.5.5 0 00-.5.5v2a.5.5 0 101 0v-2a.5.5 0 00-.5-.5z" />
			<path d="M6.5 4a.5.5 0 000 1H9a.5.5 0 100-1H6.5z" />
			<path d="M10.5 4.5c0-.28.22-.5.5-.5h2.5a.5.5 0 010 1H11a.5.5 0 01-.5-.5z" />
			<path d="M7.22 8.09a.5.5 0 00-.14.69l2.31 3.48-1.23 1.85a2 2 0 00-2.51 2.64 2 2 0 103.34-2.08l1-1.51L11 14.67a2 2 0 10.84-.55l-1.24-1.86-.6-.9L7.9 8.23a.5.5 0 00-.7-.14zM12.5 17a1 1 0 110-2 1 1 0 010 2zm-5 0a1 1 0 110-2 1 1 0 010 2z" />
			<path d="M10.6 10.45l.6.9 1.72-2.57a.5.5 0 00-.14-.7.5.5 0 00-.7.15l-1.48 2.22z" />
		</svg>
	)
}
export default ScreenCutIcon
