import { splitProps } from "solid-js"
function DesktopEditIcon(props) {
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
			<path d="M10.98 6.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02zm-.7-.71L13.93 2H3.5C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 000 1h9a.5.5 0 000-1H13v-2h3.5c.83 0 1.5-.67 1.5-1.5V6.06l-3.67 3.67c-.4.4-.92.7-1.48.84l-1.5.37a1.89 1.89 0 01-2.3-2.29l.38-1.5a3.2 3.2 0 01.84-1.48zM12 15v2H8v-2h4z" />
		</svg>
	)
}
export default DesktopEditIcon
