import { splitProps } from "solid-js"
function ArrowMinimizeIcon(props) {
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
			<path d="M3.75 11h4.5c.38 0 .7.28.74.65l.01.1v4.5a.75.75 0 01-1.5.1v-2.79l-4.47 4.47a.75.75 0 01-1.13-.98l.07-.08 4.47-4.47H3.75a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h4.5-4.5zm14.28-9.03c.27.27.3.68.07.98l-.07.08L13.06 8h3.19c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-5a.75.75 0 01-.74-.65l-.01-.1v-5a.75.75 0 011.5-.1v3.29l4.97-4.97c.3-.3.77-.3 1.06 0z" />
		</svg>
	)
}
export default ArrowMinimizeIcon
