import { splitProps } from "solid-js"
function ToolboxIcon(props) {
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
			<path d="M6 4.5V6H4a2 2 0 00-2 2v2h4v-.5a.5.5 0 011 0v.5h6v-.5a.5.5 0 011 0v.5h4V8a2 2 0 00-2-2h-2V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5zM7.5 4h5c.28 0 .5.22.5.5V6H7V4.5c0-.28.22-.5.5-.5zM18 11h-4v.5a.5.5 0 11-1 0V11H7v.5a.5.5 0 01-1 0V11H2v4c0 1.1.9 2 2 2h12a2 2 0 002-2v-4z" />
		</svg>
	)
}
export default ToolboxIcon
