import { splitProps } from "solid-js"
function EyedropperOffIcon(props) {
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
			<path d="M7.8 8.5L2.14 2.85a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-5.65-5.64-4.35 4.35a1.5 1.5 0 01-1.06.44H5.6l-2.25.98a1 1 0 01-1.32-1.3L3 14.41v-.5c0-.4.16-.79.44-1.07L7.79 8.5zm3 3L8.5 9.2l-4.35 4.36a.5.5 0 00-.15.35v.6a.5.5 0 01-.04.2l-1 2.36 2.34-1.03a.5.5 0 01.2-.04h.59a.5.5 0 00.35-.15l4.35-4.35zm2-2l-.6.59.72.7.58-.58.35.35a1.5 1.5 0 002.13 0l.58-.59a1.5 1.5 0 000-2.12l-.35-.35 1.04-1.04a2.62 2.62 0 10-3.71-3.7L12.5 3.78l-.35-.35a1.5 1.5 0 00-2.12 0l-.59.59a1.5 1.5 0 000 2.12l.35.35-.58.59.7.7.6-.58 2.28 2.29z" />
		</svg>
	)
}
export default EyedropperOffIcon
