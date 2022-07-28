import { splitProps } from "solid-js"
function ChartPersonIcon(props) {
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
			<path d="M10.5 2.5a.5.5 0 10-1 0V3H4.75A2.75 2.75 0 002 5.75v6.5A2.75 2.75 0 004.75 15h1.82l-1.49 2.23a.5.5 0 00.84.55L7.77 15H11.5a2.5 2.5 0 011.77-.99A2.99 2.99 0 0115.5 9a3 3 0 012.5 1.34V5.75A2.75 2.75 0 0015.25 3H10.5v-.5zM5 6.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm.5 4.5h4a.5.5 0 010 1h-4a.5.5 0 010-1zm0-2.5h5a.5.5 0 010 1h-5a.5.5 0 010-1zm12 3.5a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default ChartPersonIcon
