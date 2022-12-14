import { splitProps } from "solid-js"
function GroupIcon(props) {
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
			<path d="M7 4.5c0 .36-.07.7-.2 1H10c.28 0 .5.22.5.5v2H10a2 2 0 00-2 2v.5H6a.5.5 0 01-.5-.5V6.8a2.5 2.5 0 01-1.5.15V10c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h3.05a2.51 2.51 0 01.16-1.5H10a.5.5 0 01-.5-.5v-2h.5a2 2 0 002-2v-.5h2c.28 0 .5.22.5.5v3.2a2.5 2.5 0 011.5-.15V10a2 2 0 00-2-2h-2V6a2 2 0 00-2-2H6.95c.03.16.05.33.05.5zm3.5 5v.5a.5.5 0 01-.5.5h-.5V10c0-.28.22-.5.5-.5h.5zM6 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm11 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-11 11a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
		</svg>
	)
}
export default GroupIcon
