import { splitProps } from "solid-js"
function ArrowNextIcon(props) {
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
			<path d="M13.5 5a.5.5 0 01.5.41v9.09a.5.5 0 01-1 .09V5.5c0-.28.22-.5.5-.5zm-7.85.15a.5.5 0 01.63-.06l.07.06 4.5 4.5c.18.17.2.44.06.63l-.06.07-4.5 4.5a.5.5 0 01-.76-.63l.06-.07L9.79 10 5.65 5.85a.5.5 0 010-.7z" />
		</svg>
	)
}
export default ArrowNextIcon
