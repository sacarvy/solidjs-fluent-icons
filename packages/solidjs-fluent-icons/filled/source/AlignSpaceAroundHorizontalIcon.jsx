import { splitProps } from "solid-js"
function AlignSpaceAroundHorizontalIcon(props) {
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
			<path d="M7.5 16c.83 0 1.5-.67 1.5-1.5v-9C9 4.67 8.33 4 7.5 4h-2C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h2z" />
			<path d="M14.5 16c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h2z" />
		</svg>
	)
}
export default AlignSpaceAroundHorizontalIcon
