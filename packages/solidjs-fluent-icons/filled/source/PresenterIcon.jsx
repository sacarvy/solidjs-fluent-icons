import { splitProps } from "solid-js"
function PresenterIcon(props) {
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
			<path d="M12 4a2 2 0 11-4 0 2 2 0 014 0zM7 14.78v1.72c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1.72a.5.5 0 01.15-.36l3.7-3.56a.5.5 0 00-.34-.86H3.49a.5.5 0 00-.35.86l3.7 3.56c.1.1.16.23.16.36zM8.5 7C7.67 7 7 7.67 7 8.5V9h6v-.5c0-.83-.67-1.5-1.5-1.5h-3z" />
		</svg>
	)
}
export default PresenterIcon
