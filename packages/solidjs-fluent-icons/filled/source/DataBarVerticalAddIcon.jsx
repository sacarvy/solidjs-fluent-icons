import { splitProps } from "solid-js"
function DataBarVerticalAddIcon(props) {
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
			<path d="M10 18a2 2 0 01-2-2V4a2 2 0 114 0v5.6a5.5 5.5 0 00-1.76 8.39L10 18zm4.5-9c1.33 0 2.55.47 3.5 1.26V8a2 2 0 10-4 0v1.02l.5-.02zM2 16a2 2 0 104 0v-4a2 2 0 10-4 0v4zm17-1.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default DataBarVerticalAddIcon
