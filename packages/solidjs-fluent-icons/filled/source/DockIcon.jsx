import { splitProps } from "solid-js"
function DockIcon(props) {
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
			<path d="M10.53 3.22a.75.75 0 00-1.06 0l-2.5 2.5a.75.75 0 001.06 1.06l1.22-1.22v6.69a.75.75 0 001.5 0V5.56l1.22 1.22a.75.75 0 101.06-1.06l-2.5-2.5zM3.5 10.5a1 1 0 011-1h2.75a.75.75 0 000-1.5H4.5A2.5 2.5 0 002 10.5v3A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-3A2.5 2.5 0 0015.5 8h-2.75a.75.75 0 000 1.5h2.75a1 1 0 011 1v3a1 1 0 01-1 1h-11a1 1 0 01-1-1v-3z" />
		</svg>
	)
}
export default DockIcon
