import { splitProps } from "solid-js"
function CellularWarningIcon(props) {
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
			<path d="M4.75 12c.38 0 .69.28.74.64l.01.11v2.5a.75.75 0 01-1.5.11v-2.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v4.5a.75.75 0 01-1.5.11v-4.61c0-.41.34-.75.75-.75zm3-2c.38 0 .69.28.74.64l.01.11v3.79l-1.47 2.93a.75.75 0 01-.02-.1l-.01-.12v-6.5c0-.41.34-.75.75-.75zM13 9.68c.4-.45.95-.68 1.5-.68V6.64a.75.75 0 00-1.5.11v2.93zm3.3.43l1.19 2.39.01-7.76v-.11a.74.74 0 00-1.49.12v4.93c.1.12.2.27.28.43zm-2.7.44l-3.5 7A1 1 0 0011 19h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM15 12.5v3a.5.5 0 11-1 0v-3a.5.5 0 011 0zm-.5 5.5a.5.5 0 110-1 .5.5 0 010 1z" />
		</svg>
	)
}
export default CellularWarningIcon
