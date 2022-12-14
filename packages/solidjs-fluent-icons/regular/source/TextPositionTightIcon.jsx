import { splitProps } from "solid-js"
function TextPositionTightIcon(props) {
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
			<path d="M3 3.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zM3.5 6h2.76c-.2.3-.38.64-.5 1H3.5a.5.5 0 010-1zm0 3h2v1h-2a.5.5 0 010-1zm0 3h2v1h-2a.5.5 0 010-1zm0 3h13a.5.5 0 010 1h-13a.5.5 0 010-1zm13-2h-2v-1h2a.5.5 0 010 1zm-2-4v1h2a.5.5 0 000-1h-2zm-.76-3c.2.3.38.64.5 1h2.26a.5.5 0 000-1h-2.76zM7.5 8.5a2.5 2.5 0 015 0v5a.5.5 0 001 0v-5a3.5 3.5 0 10-7 0v5a.5.5 0 001 0v-5z" />
		</svg>
	)
}
export default TextPositionTightIcon
