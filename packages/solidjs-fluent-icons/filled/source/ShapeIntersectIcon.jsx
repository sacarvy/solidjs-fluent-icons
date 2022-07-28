import { splitProps } from "solid-js"
function ShapeIntersectIcon(props) {
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
			<path d="M2 4.5A2.5 2.5 0 014.5 2h6A2.5 2.5 0 0113 4.5V7h2.5A2.5 2.5 0 0118 9.5v6a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 017 15.5V13H4.5A2.5 2.5 0 012 10.5v-6zM7 12V9.5A2.5 2.5 0 019.5 7H12V4.5c0-.83-.67-1.5-1.5-1.5h-6C3.67 3 3 3.67 3 4.5v6c0 .83.67 1.5 1.5 1.5H7zm1 1v2.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H13v2.5a2.5 2.5 0 01-2.5 2.5H8z" />
		</svg>
	)
}
export default ShapeIntersectIcon
