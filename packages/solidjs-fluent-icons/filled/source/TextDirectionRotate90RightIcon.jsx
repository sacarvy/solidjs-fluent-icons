import { splitProps } from "solid-js"
function TextDirectionRotate90RightIcon(props) {
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
			<path d="M17 6.5c0-.3-.19-.58-.47-.7l-7.5-3a.75.75 0 00-.56 1.4l2.03.8v3l-2.03.8a.75.75 0 10.56 1.4l7.5-3a.75.75 0 00.47-.7zm-2.77 0L12 7.4V5.6l2.23.9zM5 3.75a.75.75 0 011.5 0v10.69l.72-.72a.75.75 0 111.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 011.06-1.06l.72.72V3.75zm8 7a.75.75 0 011.5 0v3.69l.72-.72a.75.75 0 111.06 1.06l-2 2a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06l.72.72v-3.69z" />
		</svg>
	)
}
export default TextDirectionRotate90RightIcon
