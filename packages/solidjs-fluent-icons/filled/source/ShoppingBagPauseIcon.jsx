import { splitProps } from "solid-js"
function ShoppingBagPauseIcon(props) {
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
			<path d="M6 6V4.5a2.42 2.42 0 01.73-1.77A2.43 2.43 0 018.5 2a2.43 2.43 0 011.5.5 2.44 2.44 0 012.48-.3 2.53 2.53 0 011.32 1.33c.13.3.2.63.2.97V6h1a1 1 0 011 1v2.2a5.5 5.5 0 00-4 .4V6h1V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 0011.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0111 4.5v5.76a5.49 5.49 0 00-.74 7.74H7a3 3 0 01-3-3V7a1 1 0 011-1h1zm4 0V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 008.5 3a1.47 1.47 0 00-1.06.44A1.48 1.48 0 007 4.5V6h3zm9 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM13 12a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5zm3 0a.5.5 0 00-.5.5v4a.5.5 0 001 0v-4a.5.5 0 00-.5-.5z" />
		</svg>
	)
}
export default ShoppingBagPauseIcon
