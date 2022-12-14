import { splitProps } from "solid-js"
function BorderBottomThickIcon(props) {
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
			<path d="M9 3a1 1 0 000 2h2a1 1 0 100-2H9zm-4.64.5a1 1 0 111.16 1.62 1 1 0 00-.4.4 1 1 0 01-1.84-.33 1 1 0 01.22-.83c.22-.35.51-.64.85-.87zM6 15a1 1 0 01-.88-.52 1 1 0 00-1.84.33 1 1 0 00.22.83A3 3 0 006 17h8a3 3 0 002.5-1.35 1 1 0 10-1.62-1.17A1 1 0 0114 15H6zm9.64-11.5a1 1 0 10-1.16 1.62c.17.1.3.23.4.4a1 1 0 001.84-.33 1 1 0 00-.22-.83 3.02 3.02 0 00-.85-.87zM4 12a1 1 0 01-1-1V9a1 1 0 012 0v2a1 1 0 01-1 1zm11-1a1 1 0 102 0V9a1 1 0 10-2 0v2z" />
		</svg>
	)
}
export default BorderBottomThickIcon
