import { splitProps } from "solid-js"
function DataUsageToolboxIcon(props) {
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
			<path d="M4 2a2 2 0 00-2 2v10c0 1.1.9 2 2 2h5v-2.5c0-.17.02-.34.05-.5H9a.5.5 0 01-.5-.5v-3a.5.5 0 011 0V12c.37-.5.91-.84 1.54-.96A2.5 2.5 0 0112 9.5v-4a.5.5 0 011 0v3.55c.16-.03.33-.05.5-.05h2c.17 0 .34.02.5.05V4a2 2 0 00-2-2H4zm1 5.5a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zm7 4.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" />
		</svg>
	)
}
export default DataUsageToolboxIcon
