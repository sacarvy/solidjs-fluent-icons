import { splitProps } from "solid-js"
function RotateRightIcon(props) {
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
			<path d="M7.61 12c.3 0 .54-.23.54-.52a.53.53 0 00-.54-.52h-.35c-1.77 0-3.2-1.08-3.2-2.42 0-1.3 1.35-2.36 3.04-2.42h5.08L10.96 7.3c-.2.2-.2.53 0 .73.2.18.49.2.7.05l.06-.05 2.12-2.08c.21-.2.21-.53 0-.73l-2.12-2.08-.06-.05a.54.54 0 00-.7.05c-.2.2-.2.53 0 .74l1.22 1.19H7.26C4.9 5.08 3 6.63 3 8.54S4.9 12 7.26 12h.35zm9-3c.21 0 .39.17.39.38v6.87c0 .41-.36.75-.8.75H3.4a.4.4 0 01-.35-.19.37.37 0 01.15-.51l13.2-7.25a.41.41 0 01.2-.05z" />
		</svg>
	)
}
export default RotateRightIcon
