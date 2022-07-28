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
			<path d="M15.5 2.75c.41 0 .75.34.75.75v8a.75.75 0 01-1.5 0v-8c0-.41.34-.75.75-.75zM5.97 5.97c.3-.3.77-.3 1.06 0l6 6a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06zM3.5 14.75a.75.75 0 000 1.5h8a.75.75 0 000-1.5h-8z" />
		</svg>
	)
}
export default NewIcon
