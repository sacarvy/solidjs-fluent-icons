import { splitProps } from "solid-js"
function DualScreenVerticalScrollIcon(props) {
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
			<path d="M10.5 16H16a2 2 0 002-2V6a2 2 0 00-2-2h-5.5v12zm-1-12H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.5V4zm7.35 7.15c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 1.65-1.64c.2-.2.5-.2.7 0zm0-3a.5.5 0 01-.7.7L14.5 7.21l-1.65 1.64a.5.5 0 01-.7-.7l2-2c.2-.2.5-.2.7 0l2 2z" />
		</svg>
	)
}
export default DualScreenVerticalScrollIcon
