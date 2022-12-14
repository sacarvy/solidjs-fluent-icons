import { splitProps } from "solid-js"
function BinFullIcon(props) {
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
			<path d="M14.93 2.25a.5.5 0 01-.18.68L4.35 9H8v-.5C8 7.67 8.67 7 9.5 7H12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5V9h.5c.28 0 .5.22.5.5v6a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 15.5v-6c0-.18.1-.34.25-.43l12-7a.5.5 0 01.68.18zM16.5 10H3v5.5c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V10h-.5zM12 9V8H9.5a.5.5 0 00-.5.5V9h3zm1 0h3V6.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5V9z" />
		</svg>
	)
}
export default BinFullIcon
