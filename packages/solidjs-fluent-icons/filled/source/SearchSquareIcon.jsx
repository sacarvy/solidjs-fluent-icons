import { splitProps } from "solid-js"
function SearchSquareIcon(props) {
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
			<path d="M9 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm6 6.5c.79 0 1.51-.26 2.1-.7l2.55 2.55a.5.5 0 10.7-.7L11.8 11.1A3.5 3.5 0 109 12.5z" />
		</svg>
	)
}
export default SearchSquareIcon
