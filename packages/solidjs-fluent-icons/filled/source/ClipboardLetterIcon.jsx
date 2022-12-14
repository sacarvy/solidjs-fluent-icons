import { splitProps } from "solid-js"
function ClipboardLetterIcon(props) {
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
			<path d="M8.5 2c-.65 0-1.2.42-1.41 1H5.5C4.67 3 4 3.67 4 4.5v12c0 .83.67 1.5 1.5 1.5h3.59a1.5 1.5 0 01.04-1.1l3.5-8a1.5 1.5 0 012.74 0l.63 1.44V4.5c0-.83-.67-1.5-1.5-1.5h-1.59c-.2-.58-.76-1-1.41-1h-3zm3 1a.5.5 0 010 1h-3a.5.5 0 010-1h3zm2.95 6.3a.5.5 0 00-.91 0l-3.5 8a.5.5 0 10.92.4l1.18-2.7h3.72l1.18 2.7a.5.5 0 00.92-.4l-3.5-8zm.97 4.7h-2.84L14 10.75 15.42 14z" />
		</svg>
	)
}
export default ClipboardLetterIcon
