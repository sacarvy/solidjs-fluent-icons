import { splitProps } from "solid-js"
function CastIcon(props) {
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
			<path d="M3.5 4C2.67 4 2 4.67 2 5.5v9c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-13zM4 8c0-.28.22-.5.5-.5a6 6 0 016 6 .5.5 0 01-1 0 5 5 0 00-5-5A.5.5 0 014 8zm.5 2A3.5 3.5 0 018 13.5a.5.5 0 11-1 0A2.5 2.5 0 004.5 11a.5.5 0 010-1zm.25 4a.75.75 0 110-1.5.75.75 0 010 1.5z" />
		</svg>
	)
}
export default CastIcon
