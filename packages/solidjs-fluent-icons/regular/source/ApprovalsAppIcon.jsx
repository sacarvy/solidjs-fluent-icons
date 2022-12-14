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
			<path d="M9.85 1.15a.5.5 0 10-.7.7L10.29 3H9.5a7.5 7.5 0 107.5 7.5.5.5 0 00-1 0A6.5 6.5 0 119.5 4h.8L9.14 5.15a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2zm3.5 5.99c.2.2.2.5.01.7l-3.85 4a.5.5 0 01-.72 0l-1.65-1.7a.5.5 0 01.72-.7l1.29 1.34 3.49-3.63c.2-.2.5-.2.7-.01z" />
		</svg>
	)
}
export default ApprovalsAppIcon
