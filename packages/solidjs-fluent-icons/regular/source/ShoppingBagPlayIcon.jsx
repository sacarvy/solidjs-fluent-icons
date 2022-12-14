import { splitProps } from "solid-js"
function ShoppingBagPlayIcon(props) {
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
			<path d="M15 6a1 1 0 011 1v2.2c-.32-.08-.66-.15-1-.18V7h-3v2.6c-.36.18-.7.4-1 .66V7H5v8a1.98 1.98 0 001.23 1.84c.24.1.5.16.77.16h2.6c.18.36.4.7.66 1H7a3 3 0 01-3-3V7a1 1 0 011-1h1V4.5a2.42 2.42 0 01.73-1.77A2.43 2.43 0 018.5 2a2.43 2.43 0 011.5.5 2.44 2.44 0 012.48-.3 2.53 2.53 0 011.32 1.33c.13.3.2.63.2.97V6h1zm-2-1.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 0011.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0111 4.5V6h2V4.5zM7 6h3V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 008.5 3a1.47 1.47 0 00-1.06.44A1.48 1.48 0 007 4.5V6zm12 8.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.98-1.97a.45.45 0 00-.45-.03.5.5 0 00-.15.1.51.51 0 00-.14.36v3.08a.5.5 0 00.14.35.45.45 0 00.52.12.54.54 0 00.09-.05l2.3-1.57a.46.46 0 00.16-.18.54.54 0 000-.49.49.49 0 00-.17-.18l-2.3-1.5z" />
		</svg>
	)
}
export default ShoppingBagPlayIcon
