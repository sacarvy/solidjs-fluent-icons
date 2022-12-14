import { splitProps } from "solid-js"
function Battery9Icon(props) {
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
			<path d="M13.5 5A2.5 2.5 0 0116 7.5v.83h1.17a.83.83 0 01.83.84v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 012 12.5v-5A2.5 2.5 0 014.5 5h9zm.25.95H4.5c-.65 0-1.4.5-1.5 1.13v5.62c0 .64.5 1.17 1.12 1.23l.13.01h9.5c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24h-.13zm-8.92 1h7.33c.43 0 .78.32.83.73l.01.1v4.33c0 .43-.32.78-.73.83H4.83a.84.84 0 01-.82-.72l-.01-.1V7.77c0-.42.32-.77.73-.82l.1-.01h7.33-7.33z" />
		</svg>
	)
}
export default Battery9Icon
