import { splitProps } from "solid-js"
function TabletSpeakerIcon(props) {
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
			<path d="M13.7 2.04c.18.08.3.26.3.46v6a.5.5 0 01-.85.35L11.29 7h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11zm3.95.16c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 11.8-.6zm-1.7 1.08a5.5 5.5 0 01.55 2.22 4.9 4.9 0 01-.55 2.22.5.5 0 11-.9-.44l.08-.17.15-.4c.14-.42.22-.83.22-1.21s-.08-.8-.22-1.22a4.59 4.59 0 00-.23-.56.5.5 0 11.9-.44zm.4 6.42a1.5 1.5 0 01-.53-.74 1.5 1.5 0 01-.87-.07 1.5 1.5 0 01-2.51.67L10.88 8h-.38A1.5 1.5 0 019 6.5v-2c0-.18.03-.34.09-.5H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h12a2 2 0 002-2V9.8c-.5.29-1.15.27-1.65-.1zM8.5 13h3a.5.5 0 010 1h-3a.5.5 0 010-1z" />
		</svg>
	)
}
export default TabletSpeakerIcon
