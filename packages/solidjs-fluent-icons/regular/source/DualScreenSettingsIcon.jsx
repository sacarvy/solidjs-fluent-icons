import { splitProps } from "solid-js"
function DualScreenSettingsIcon(props) {
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
			<path d="M12.07 2.44a2 2 0 01-1.44 2.48l-.46.12a4.73 4.73 0 00.01 1.01l.35.09A2 2 0 0112 8.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 2.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zM14.5 6.5a1 1 0 110-2 1 1 0 010 2zM17 16v-5.6c.36-.18.7-.4 1-.66V16a2 2 0 01-2 2H4a2 2 0 01-2-2V8c0-1.1.9-2 2-2h5.02c.03.34.1.68.19 1H4a1 1 0 00-1 1v8a1 1 0 001 1h5.5V7.8c.25.54.6 1.04 1 1.47V17H16a1 1 0 001-1zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm6.5-.5a.5.5 0 000 1h1a.5.5 0 000-1h-1z" />
		</svg>
	)
}
export default DualScreenSettingsIcon
