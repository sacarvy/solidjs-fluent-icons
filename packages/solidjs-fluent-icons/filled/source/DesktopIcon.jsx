import { splitProps } from "solid-js"
function DesktopIcon(props) {
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
			<path d="M3.5 2C2.67 2 2 2.67 2 3.5v10c0 .83.67 1.5 1.5 1.5H7v2H5.5a.5.5 0 000 1h9a.5.5 0 000-1H13v-2h3.5c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-13zM12 15v2H8v-2h4z" />
		</svg>
	)
}
export default DesktopIcon
