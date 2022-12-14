import { splitProps } from "solid-js"
function ShiftsAddIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v3.6c.32-.16.65-.3 1-.4V6c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-3.2c-.1.35-.24.68-.4 1H14a3 3 0 003-3V6a3 3 0 00-3-3H6zm-.5 16a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V14h1.5a.5.5 0 010 1H6v1.5a.5.5 0 01-1 0V15H3.5a.5.5 0 010-1H5v-1.5c0-.28.22-.5.5-.5zM11 6.5a.5.5 0 00-1 0v3c0 .28.22.5.5.5h2a.5.5 0 000-1H11V6.5z" />
		</svg>
	)
}
export default ShiftsAddIcon
