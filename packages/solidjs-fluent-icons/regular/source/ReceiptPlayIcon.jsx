import { splitProps } from "solid-js"
function ReceiptPlayIcon(props) {
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
			<path d="M4 4c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3h-4.2c.08-.32.15-.66.18-1H14V4a1 1 0 00-1-1H6a1 1 0 00-1 1v5.02c-.34.03-.68.1-1 .19V4zm11 8v3a2 2 0 002-2v-1h-2zM7 5.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm0 3c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm3 6a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-6-1.6v3.2c0 .4.43.63.76.42l2.56-1.6a.5.5 0 000-.84l-2.56-1.6a.5.5 0 00-.76.42z" />
		</svg>
	)
}
export default ReceiptPlayIcon
