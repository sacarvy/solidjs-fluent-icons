import { splitProps } from "solid-js"
function AutosumIcon(props) {
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
			<path d="M3.81 3.7a.75.75 0 01.69-.45h11a.75.75 0 010 1.5H6.26l4.15 4.3c.26.28.28.72.03 1l-4.34 5.2h9.4a.75.75 0 010 1.5h-11a.75.75 0 01-.58-1.23l4.94-5.9-4.9-5.1a.75.75 0 01-.15-.81z" />
		</svg>
	)
}
export default AutosumIcon
