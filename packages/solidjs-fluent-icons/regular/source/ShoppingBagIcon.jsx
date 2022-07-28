import { splitProps } from "solid-js"
function ShoppingBagIcon(props) {
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
			<path d="M10 2.5a2.5 2.5 0 00-4 2V6H5a1 1 0 00-1 1v8a3 3 0 003 3h6.5a2.5 2.5 0 002.5-2.5V7a1 1 0 00-1-1h-1V4.5a2.5 2.5 0 00-4-2zm-3 2a1.5 1.5 0 113 0V6H7V4.5zm3.67-1.25A1.5 1.5 0 0113 4.5V6h-2V4.5c0-.45-.12-.88-.33-1.25zM7 17a2 2 0 01-2-2V7h6v8.5c0 .56.19 1.08.5 1.5H7zm8-1.5a1.5 1.5 0 01-3 0V7h3v8.5z" />
		</svg>
	)
}
export default ShoppingBagIcon
