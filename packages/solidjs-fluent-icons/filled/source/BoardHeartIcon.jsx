import { splitProps } from "solid-js"
function BoardHeartIcon(props) {
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
			<path d="M9.5 7V3H6a3 3 0 00-3 3v1h6.5zm1.25 8.41l3.43 3.46c.18.17.46.17.64 0l3.43-3.46A2.6 2.6 0 0017 11.06a2.55 2.55 0 00-2.38.7l-.12.12-.12-.12a2.55 2.55 0 00-3.84.24 2.6 2.6 0 00.21 3.41zM9.5 17v-1.58a3.6 3.6 0 010-3.67V8H3v6a3 3 0 003 3h3.5zm5-6.43a3.55 3.55 0 012.5-.53V6a3 3 0 00-3-3h-3.5v7.66a3.55 3.55 0 014-.09z" />
		</svg>
	)
}
export default BoardHeartIcon
