import { splitProps } from "solid-js"
function HeadsetAddIcon(props) {
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
			<path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zm-.5 7.5a5.5 5.5 0 001.5-.2v.2a2 2 0 01-2 2h-1a1 1 0 01-1-1v-1.6c.75.38 1.6.6 2.5.6zm-4.25-9a5.5 5.5 0 00-.66 1.02A5 5 0 005 8h2a1 1 0 011 1v3a1 1 0 01-1 1H5v1c0 1.1.9 2 2 2h1a2 2 0 11.27 1H7a3 3 0 01-3-3V8a6 6 0 016.25-6z" />
		</svg>
	)
}
export default HeadsetAddIcon
