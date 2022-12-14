import { splitProps } from "solid-js"
function BoxSearchIcon(props) {
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
			<path d="M10 7.96l3.03-1.21-7.5-3-2.59 1.03a1.5 1.5 0 00-.36.21L10 7.96zm-7.96-2.1c-.03.1-.04.2-.04.32v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.26.1.53.17.8.21v-2.17a4.48 4.48 0 010-4.12v-2.6L2.04 5.85zM18 13.42V6.18c0-.11-.01-.22-.04-.33L10.5 8.84v1.3a4.5 4.5 0 017.5 3.28zm-.58-8.44l-3.04 1.22-7.5-3 1.82-.73a3.5 3.5 0 012.6 0l5.76 2.3c.13.06.25.13.36.21zM16.3 15.6a3.5 3.5 0 10-.7.7l2.55 2.56a.5.5 0 10.7-.7L16.3 15.6zm-.3-2.1a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
		</svg>
	)
}
export default BoxSearchIcon
