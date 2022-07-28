import { splitProps } from "solid-js"
function TableSimpleIcon(props) {
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
			<path d="M5.5 3A2.5 2.5 0 003 5.5v4h6.5V3h-4zm4 7.5H3v4A2.5 2.5 0 005.5 17h4v-6.5zm1 0H17v4a2.5 2.5 0 01-2.5 2.5h-4v-6.5zm6.5-1v-4A2.5 2.5 0 0014.5 3h-4v6.5H17z" />
		</svg>
	)
}
export default TableSimpleIcon
