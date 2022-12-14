import { splitProps } from "solid-js"
function BookToolboxIcon(props) {
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
			<path d="M12 3v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V3h.5c.83 0 1.5.67 1.5 1.5V6h-2v-.5a.5.5 0 00-1 0V6h-3v-.5a.5.5 0 00-1 0V6h-2V4.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5V3h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zM17 7h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 0110 8.5V7h2v.5a.5.5 0 001 0V7h3v.5a.5.5 0 001 0V7zm-5.96-4.96l.01-.04H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 100-1H6a1 1 0 01-1-1h10.5a.5.5 0 00.5-.5V11h-4.5A2.5 2.5 0 019 8.5v-4a2.5 2.5 0 012.04-2.46z" />
		</svg>
	)
}
export default BookToolboxIcon
