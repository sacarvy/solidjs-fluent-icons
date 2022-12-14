import { splitProps } from "solid-js"
function SlideEraserIcon(props) {
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
			<path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h6c0-.34.08-.69.23-1H4a1 1 0 01-1-1V6a1 1 0 011-1h12a1 1 0 011 1v4.23c.21.11.41.25.6.43l.4.41V6a2 2 0 00-2-2H4zm11.12 7.37a1.25 1.25 0 011.76 0l1.75 1.75c.5.48.5 1.28 0 1.76l-2.57 2.58-3.52-3.52 2.58-2.57zm-3.18 3.17l-.57.58a1.25 1.25 0 000 1.76l1.75 1.75c.48.5 1.28.5 1.76 0l.58-.57-3.52-3.52z" />
		</svg>
	)
}
export default SlideEraserIcon
