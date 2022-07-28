import { splitProps } from "solid-js"
function CodeTextEditIcon(props) {
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
			<path d="M2.5 5a.5.5 0 000 1H8a.5.5 0 000-1H2.5zm3 3a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 11.5c0-.28.22-.5.5-.5h9.44l-1 1H4.5a.5.5 0 01-.5-.5zm6.27 3.17l.67-.67H2.5a.5.5 0 000 1h7.49c.08-.12.18-.23.28-.33zM12.5 8.5c0-.28.22-.5.5-.5h3.5a.5.5 0 010 1H13a.5.5 0 01-.5-.5zm-2-3.5a.5.5 0 000 1H17a.5.5 0 000-1h-6.5zm.48 10.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default CodeTextEditIcon
