import { splitProps } from "solid-js"
function TextLineSpacingIcon(props) {
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
			<path d="M17.78 4.22a.75.75 0 01-1.06 1.06L16 4.56v3.69a.75.75 0 01-1.5 0V4.56l-.72.72a.75.75 0 11-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2zM3 4.25c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5A.75.75 0 013 4.25zM15.25 11c.41 0 .75.34.75.75v3.69l.72-.72a.75.75 0 111.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72v-3.69c0-.41.34-.75.75-.75zM3 9.25c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 9.25zm.75 4.25a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5z" />
		</svg>
	)
}
export default TextLineSpacingIcon
