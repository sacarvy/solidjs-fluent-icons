import { splitProps } from "solid-js"
function PlugDisconnectedIcon(props) {
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
			<path d="M17.78 2.22c.3.3.3.77 0 1.06l-1.45 1.45a4.04 4.04 0 01-.48 5.12l-.3.3-.3.31c-.42.41-1.08.41-1.5 0L9.55 6.24a1.05 1.05 0 010-1.48l.6-.61a4.05 4.05 0 015.13-.48l1.45-1.45c.3-.3.77-.3 1.06 0zm-9 6.25c.3.3.3.77 0 1.06L7.51 10.8l1.69 1.7 1.27-1.28a.75.75 0 111.06 1.06l-1.28 1.28c.48.58.45 1.45-.1 2l-.3.3a4.04 4.04 0 01-5.12.47l-1.45 1.45a.75.75 0 01-1.06-1.06l1.45-1.45a4.04 4.04 0 01.48-5.12l.3-.3a1.49 1.49 0 012-.1l1.27-1.28c.3-.3.77-.3 1.06 0z" />
		</svg>
	)
}
export default PlugDisconnectedIcon
