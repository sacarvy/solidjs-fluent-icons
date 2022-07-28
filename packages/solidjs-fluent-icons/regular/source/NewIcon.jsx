import { splitProps } from "solid-js"
function NewIcon(props) {
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
			<path d="M15.5 3c.28 0 .5.22.5.5v8a.5.5 0 01-1 0v-8c0-.28.22-.5.5-.5zM6.15 6.15c.2-.2.5-.2.7 0l6 6a.5.5 0 01-.7.7l-6-6a.5.5 0 010-.7zM3.5 15a.5.5 0 000 1h8a.5.5 0 000-1h-8z" />
		</svg>
	)
}
export default NewIcon
