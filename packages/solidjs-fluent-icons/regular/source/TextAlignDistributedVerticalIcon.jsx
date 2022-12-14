import { splitProps } from "solid-js"
function TextAlignDistributedVerticalIcon(props) {
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
			<path d="M17.85 4.85a.5.5 0 01-.7 0L16 3.71V17.5a.5.5 0 11-1 0V3.7l-1.15 1.15a.5.5 0 01-.7-.7l2-2c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7zm-15 10.3a.5.5 0 10-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 10-.7-.7L5 16.29V2.5a.5.5 0 00-1 0v13.8l-1.15-1.15zM10 18a.5.5 0 01-.5-.5v-15a.5.5 0 011 0v15a.5.5 0 01-.5.5z" />
		</svg>
	)
}
export default TextAlignDistributedVerticalIcon
