import { splitProps } from "solid-js"
function ArrowTrendingTextIcon(props) {
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
			<path d="M16.75 3a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-4.22 4.22c-.3.3-.77.3-1.06 0L9 8.06l-4.72 4.72a.75.75 0 01-1.06-1.06l5.25-5.25c.3-.3.77-.3 1.06 0l1.72 1.72 3.69-3.69h-2.69a.75.75 0 010-1.5h4.5zM10 13c0-1.1.9-2 2-2h5a2 2 0 012 2v4a2 2 0 01-2 2h-5a2 2 0 01-2-2v-4zm6.5 3h-4a.5.5 0 100 1h4a.5.5 0 100-1zm-4-3a.5.5 0 100 1h4a.5.5 0 100-1h-4z" />
		</svg>
	)
}
export default ArrowTrendingTextIcon
