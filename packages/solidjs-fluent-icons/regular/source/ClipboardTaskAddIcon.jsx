import { splitProps } from "solid-js"
function ClipboardTaskAddIcon(props) {
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
			<path d="M6.5 2c-.65 0-1.2.42-1.41 1H3.5C2.67 3 2 3.67 2 4.5v12c0 .83.67 1.5 1.5 1.5h6.76a5.5 5.5 0 01-.66-1H3.5a.5.5 0 01-.5-.5v-12c0-.28.22-.5.5-.5h1.59c.2.58.76 1 1.41 1h3c.65 0 1.2-.42 1.41-1h1.59c.28 0 .5.22.5.5v4.7c.32-.08.66-.15 1-.18V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zM6 3.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm4.85 6.35a.5.5 0 00-.7-.7L7 12.29l-1.15-1.14a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l3.5-3.5zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default ClipboardTaskAddIcon
