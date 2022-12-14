import { splitProps } from "solid-js"
function ReceiptAddIcon(props) {
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
			<path d="M4 4c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3h-4.2A5.5 5.5 0 004 9.2V4zm11 11a2 2 0 002-2v-1h-2v3zM7.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm2.5 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5z" />
		</svg>
	)
}
export default ReceiptAddIcon
