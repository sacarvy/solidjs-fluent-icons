import { splitProps } from "solid-js"
function DrawShapeIcon(props) {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3c-.69.03-1.37.31-1.9.84l-4.83 4.83a3.2 3.2 0 00-.8 1.31c-.16-.19-.39-.35-.67-.47-.99-.4-2.05-.1-2.75.16a12 12 0 00-.41.15c-.38.19-.72.31-1.01.4A1.2 1.2 0 013.47 16c-.3-.26-.47-.64-.47-1.05v-.93V6zm7.98 9.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 01-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 01-1.33-.82c-.12-.2.15-.4.36-.28.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default DrawShapeIcon
