import { splitProps } from "solid-js"
function GridDotsIcon(props) {
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
			<path d="M5.75 4a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zm0 6a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM4 17.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM11.75 4a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM10 11.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM11.75 16a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM16 5.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5zM17.75 10a1.75 1.75 0 11-3.5 0 1.75 1.75 0 013.5 0zM16 17.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" />
		</svg>
	)
}
export default GridDotsIcon
