import { splitProps } from "solid-js"
function ArrowStepBackIcon(props) {
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
			<path d="M7.85 3.15c.2.2.2.5 0 .7L4.71 7H10a8 8 0 016.94 4.04.5.5 0 11-.88.5A7 7 0 0010 8H4.7l3.15 3.15a.5.5 0 01-.7.7L3.15 7.87a.5.5 0 01-.01-.72l4-4c.19-.2.5-.2.7 0zM8 15a2 2 0 114 0 2 2 0 01-4 0zm2-1a1 1 0 100 2 1 1 0 000-2z" />
		</svg>
	)
}
export default ArrowStepBackIcon
