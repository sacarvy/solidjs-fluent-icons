import { splitProps } from "solid-js"
function EraserIcon(props) {
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
			<path d="M11.2 2.44a1.5 1.5 0 012.12 0l4.24 4.24a1.5 1.5 0 010 2.12L9.36 17h5.14a.5.5 0 010 1H7.82a1.5 1.5 0 01-1.14-.44l-4.24-4.24a1.5 1.5 0 010-2.12l8.76-8.76zM9.78 15.17l-4.95-4.95-1.69 1.69a.5.5 0 000 .7l4.25 4.25c.2.2.5.2.7 0l1.7-1.7z" />
		</svg>
	)
}
export default EraserIcon
