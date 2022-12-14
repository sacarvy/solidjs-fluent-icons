import { splitProps } from "solid-js"
function WifiSettingsIcon(props) {
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
			<path d="M17.84 8.12a9.47 9.47 0 00-15.6 0 .75.75 0 101.23.85 7.97 7.97 0 0113.14 0 .75.75 0 101.23-.85zM7.11 11.05a4.13 4.13 0 014.18-1.02c-.5.36-.94.8-1.3 1.31a2.62 2.62 0 00-2.36 1.58.75.75 0 11-1.38-.6c.21-.47.5-.9.86-1.27zm7.48-2.39l.33.36a5.58 5.58 0 00-1.97.2 4.94 4.94 0 00-7.32 1.76.75.75 0 11-1.34-.68 6.44 6.44 0 0110.3-1.64zm-2.52 2.78a2 2 0 01-1.43 2.48l-.46.12a4.7 4.7 0 000 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default WifiSettingsIcon
