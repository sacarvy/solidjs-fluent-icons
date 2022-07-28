import { splitProps } from "solid-js"
function DropIcon(props) {
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
			<path d="M9.65 2.15c.2-.2.5-.2.7 0 .54.53 1.8 2.06 2.95 3.9 1.13 1.82 2.2 4.05 2.2 5.95 0 1.84-.53 3.35-1.5 4.4a5.3 5.3 0 01-4 1.6c-1.61 0-3-.54-4-1.6A6.29 6.29 0 014.5 12c0-1.9 1.07-4.13 2.2-5.95a25.3 25.3 0 012.95-3.9z" />
		</svg>
	)
}
export default DropIcon
