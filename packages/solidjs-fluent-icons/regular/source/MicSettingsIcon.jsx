import { splitProps } from "solid-js"
function MicSettingsIcon(props) {
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
			<path d="M9 13h.2c.12-.4.27-.76.46-1.11A2 2 0 017 10V5a2 2 0 114 0v5c0 .1 0 .18-.02.27.31-.26.66-.48 1.02-.67V5a3 3 0 10-6 0v5a3 3 0 003 3zm-4.5-3A4.5 4.5 0 009 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0zm7.56 1.44a2 2 0 01-1.43 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default MicSettingsIcon
