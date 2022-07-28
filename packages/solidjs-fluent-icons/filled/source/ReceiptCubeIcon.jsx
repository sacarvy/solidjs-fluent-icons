import { splitProps } from "solid-js"
function ReceiptCubeIcon(props) {
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
			<path d="M4 4c0-1.1.9-2 2-2h7a2 2 0 012 2v7h3v2a3 3 0 01-3 3h-4.5v-4.38a1 1 0 00-.55-.9l-4-2a1 1 0 00-.9 0L4 9.25V4zm11 11a2 2 0 002-2v-1h-2v3zM7.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 2a.5.5 0 000 1h4a.5.5 0 000-1h-4zm-6 8.88v-3.76a1 1 0 01.55-.9l3-1.5a1 1 0 01.9 0l3 1.5a1 1 0 01.55.9v3.76a1 1 0 01-.55.9l-3 1.5a1 1 0 01-.9 0l-3-1.5a1 1 0 01-.55-.9zm1.04-3.57a.5.5 0 00.27.65L5 13.9v2.61a.5.5 0 001 0v-2.61l2.2-.93a.5.5 0 00-.4-.92L5.5 13l-2.3-.97a.5.5 0 00-.66.27z" />
		</svg>
	)
}
export default ReceiptCubeIcon
