import { splitProps } from "solid-js"
function BracesIcon(props) {
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
			<path d="M6.5 3A2.5 2.5 0 004 5.5v2.88c0 .5-.28.95-.72 1.17a.5.5 0 000 .9c.44.22.72.68.72 1.17v2.88A2.5 2.5 0 006.5 17a.5.5 0 000-1A1.5 1.5 0 015 14.5v-2.88c0-.62-.24-1.2-.66-1.62.42-.42.66-1 .66-1.62V5.5C5 4.67 5.67 4 6.5 4a.5.5 0 000-1zm7 0A2.5 2.5 0 0116 5.5v2.88c0 .5.28.95.72 1.17a.5.5 0 010 .9 1.3 1.3 0 00-.72 1.17v2.88a2.5 2.5 0 01-2.5 2.5.5.5 0 010-1c.83 0 1.5-.67 1.5-1.5v-2.88c0-.62.24-1.2.66-1.62A2.3 2.3 0 0115 8.38V5.5c0-.83-.67-1.5-1.5-1.5a.5.5 0 010-1z" />
		</svg>
	)
}
export default BracesIcon
