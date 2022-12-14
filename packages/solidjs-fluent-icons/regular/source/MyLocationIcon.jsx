import { splitProps } from "solid-js"
function MyLocationIcon(props) {
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
			<path d="M10 13a3 3 0 100-6 3 3 0 000 6zm.5-10.5a.5.5 0 00-1 0v1.52A6 6 0 004.02 9.5H2.5a.5.5 0 000 1h1.52a6 6 0 005.48 5.48v1.52a.5.5 0 001 0v-1.52a6 6 0 005.48-5.48h1.52a.5.5 0 000-1h-1.52a6 6 0 00-5.48-5.48V2.5zM10 15a5 5 0 110-10 5 5 0 010 10z" />
		</svg>
	)
}
export default MyLocationIcon
