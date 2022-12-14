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
			<path d="M4 4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zM3 6a1 1 0 011-1h5.5v10H4a1 1 0 01-1-1V6zm7.5 9V5H16a1 1 0 011 1v8a1 1 0 01-1 1h-5.5zm5.35-3.85c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7l1.65 1.64 1.65-1.64c.2-.2.5-.2.7 0zm0-3a.5.5 0 01-.7.7L13.5 7.21l-1.65 1.64a.5.5 0 01-.7-.7l2-2c.2-.2.5-.2.7 0l2 2z" />
		</svg>
	)
}
export default DualScreenVerticalScrollIcon
