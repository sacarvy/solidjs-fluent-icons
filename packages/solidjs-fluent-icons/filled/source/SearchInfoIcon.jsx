import { splitProps } from "solid-js"
function SearchInfoIcon(props) {
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
			<path d="M14 8.5a5.5 5.5 0 10-1.98 4.23l4.13 4.12.07.06a.5.5 0 00.63-.76l-4.12-4.13A5.48 5.48 0 0014 8.5zM8.5 7a.5.5 0 110-1 .5.5 0 010 1zM9 8.5v2a.5.5 0 01-1 0v-2a.5.5 0 011 0z" />
		</svg>
	)
}
export default SearchInfoIcon
