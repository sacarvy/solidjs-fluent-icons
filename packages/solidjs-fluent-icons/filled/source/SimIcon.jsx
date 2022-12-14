import { splitProps } from "solid-js"
function SimIcon(props) {
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
			<path d="M4 5a3 3 0 013-3h3.46a3 3 0 012.13.88l2.53 2.53A3 3 0 0116 7.54V15a3 3 0 01-3 3H7a3 3 0 01-3-3V5zm3 5.5v.5h3V9H8.5C7.67 9 7 9.67 7 10.5zM7 12v1.5c0 .83.67 1.5 1.5 1.5H10v-3H7zm4.5 3c.83 0 1.5-.67 1.5-1.5v-3c0-.83-.67-1.5-1.5-1.5H11v6h.5z" />
		</svg>
	)
}
export default SimIcon
