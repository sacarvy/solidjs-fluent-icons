import { splitProps } from "solid-js"
function BroomIcon(props) {
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
			<path d="M17.91 2.18c.2.2.2.51 0 .7L13.3 7.5a5.6 5.6 0 00-.7-.7l4.6-4.62c.2-.2.51-.2.71 0zm-5.66 5.66a4.5 4.5 0 00-6.36 0l-.42.42 6.36 6.36.42-.42a4.5 4.5 0 000-6.36zm-10.5 2.75l2.9-1.74 6.5 6.5a.5.5 0 00.1.08L9.5 18.35a.5.5 0 01-.78.1l-7.07-7.08a.5.5 0 01.1-.78z" />
		</svg>
	)
}
export default BroomIcon
