import { splitProps } from "solid-js"
function DrawImageIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v9.08c0 .45.55.68.87.36L5.2 14.1l3.74-3.68a1.5 1.5 0 012.1 0l1.74 1.72 2.31-2.3c.53-.54 1.21-.82 1.9-.85V6a3 3 0 00-3-3H6zm8 4.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 11-1 0 .5.5 0 011 0zm-2.73 7.17l1.82-1.81-1.74-1.71a.5.5 0 00-.7 0L5.43 15.3c-.23.23-.01.58.3.47l.32-.11c.7-.26 1.76-.55 2.75-.16.28.12.5.28.68.48.15-.5.42-.95.8-1.32zm.71.7l4.83-4.82a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.22.3c-1.12.33-2.8.23-3.31-.18a1.05 1.05 0 01-.32-1.24c.04-.08-.02-.18-.1-.17-.5.07-.9.25-1.3.43-.6.25-1.16.5-1.98.4a1.7 1.7 0 01-1.33-.82c-.12-.2.15-.4.36-.28.37.18.83.33 1.22.24.25-.05.57-.19.94-.34.88-.37 2-.85 2.86-.5.64.26.59.98.4 1.33-.03.07 0 .16.07.18.27.06.65.1 1.11.09 0-.05.02-.1.03-.14l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default DrawImageIcon
