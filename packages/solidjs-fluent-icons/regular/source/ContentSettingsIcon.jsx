import { splitProps } from "solid-js"
function ContentSettingsIcon(props) {
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
			<path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.1c-.16-.32-.3-.65-.4-1H5.5A1.5 1.5 0 014 14.5V7h12v2.2c.35.1.68.24 1 .4V5.5A2.5 2.5 0 0014.5 3h-9zM4 5.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5V6H4v-.5zm5 3v6a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-6c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5zM6 9v5h2V9H6zm4-.5c0-.28.22-.5.5-.5h4a.5.5 0 110 1h-4a.5.5 0 01-.5-.5zm2.07 2.94a2 2 0 01-1.43 2.48l-.47.12a4.7 4.7 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default ContentSettingsIcon
