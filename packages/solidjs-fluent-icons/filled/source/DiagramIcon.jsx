import { splitProps } from "solid-js"
function DiagramIcon(props) {
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
			<path d="M5 2a3 3 0 00-3 3v9a3 3 0 003 3h.82l.9-1H5a2 2 0 01-2-2V5c0-1.1.9-2 2-2h8a2 2 0 012 2v5.03c.36.06.7.2 1 .4V5a3 3 0 00-3-3H5zm.5 3a.5.5 0 000 1h7a.5.5 0 000-1h-7zM5 8.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM6.5 11a.5.5 0 00-.37.83L8.94 15l-2.81 3.17a.5.5 0 00.37.83h8.1c.38 0 .76-.15 1.04-.42l3.13-3.04c.3-.3.3-.78 0-1.08l-3.13-3.04a1.5 1.5 0 00-1.05-.42H6.5z" />
		</svg>
	)
}
export default DiagramIcon
