import { splitProps } from "solid-js"
function ApprovalsAppIcon(props) {
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
			<path d="M9.78.72a.75.75 0 00-1.06 1.06L9.94 3H9.5a7.5 7.5 0 107.5 7.5.75.75 0 00-1.5 0 6 6 0 11-6.06-6l-.72.72a.75.75 0 001.06 1.06l2.25-2.25c.3-.3.3-.77 0-1.06L9.78.72zm3.74 6.24c.3.29.3.76.02 1.06l-3.85 4a.75.75 0 01-1.08 0l-1.65-1.71a.75.75 0 111.08-1.04l1.11 1.15 3.31-3.44c.29-.3.76-.3 1.06-.02z" />
		</svg>
	)
}
export default ApprovalsAppIcon
