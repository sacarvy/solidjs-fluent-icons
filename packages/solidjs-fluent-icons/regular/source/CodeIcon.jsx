import { splitProps } from "solid-js"
function CodeIcon(props) {
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
			<path d="M12.97 3.68a.5.5 0 00-.94-.36l-5 13a.5.5 0 10.94.36l5-13zM5.83 6.12c.2.18.23.5.05.7L3.16 10l2.72 3.17a.5.5 0 01-.76.66l-3-3.5a.5.5 0 010-.66l3-3.5a.5.5 0 01.7-.05zm8.34 8.26a.5.5 0 01-.05-.7l2.72-3.18-2.72-3.17a.5.5 0 11.76-.66l3 3.5a.5.5 0 010 .66l-3 3.5a.5.5 0 01-.7.05z" />
		</svg>
	)
}
export default CodeIcon
