import { splitProps } from "solid-js"
function DesktopSyncIcon(props) {
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
			<path d="M10 5.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.98 1.98 0 00-1.72-.1 2 2 0 00-.66.44.5.5 0 11-.71-.71A3 3 0 0116 3.15V3c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 0113 7.85V8a.5.5 0 01-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.98 1.98 0 001.72.1 2 2 0 00.66-.44.5.5 0 11.71.71 3 3 0 01-1 .66zM14.5 11c1.33 0 2.55-.47 3.5-1.26v3.76c0 .83-.67 1.5-1.5 1.5H13v2h1.5a.5.5 0 010 1h-9a.5.5 0 010-1H7v-2H3.5A1.5 1.5 0 012 13.5v-10C2 2.67 2.67 2 3.5 2h6.76a5.5 5.5 0 004.24 9zM12 15H8v2h4v-2z" />
		</svg>
	)
}
export default DesktopSyncIcon
