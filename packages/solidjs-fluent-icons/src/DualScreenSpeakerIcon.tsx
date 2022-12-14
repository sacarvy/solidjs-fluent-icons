import { splitProps, ComponentProps, JSX } from "solid-js"

function DualScreenSpeakerIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17.65 2.2c.12.16.29.45.44.87.26.68.41 1.5.41 2.43 0 .94-.15 1.75-.4 2.43-.16.42-.33.7-.45.87a.5.5 0 01-.85-.52l.12-.19a5.9 5.9 0 00.58-2.6 5.9 5.9 0 00-.58-2.58l-.07-.11a.5.5 0 11.8-.6zm-3.96-.16c.19.08.31.26.31.46v6a.5.5 0 01-.85.35L11.29 7h-.79a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5h.8l1.85-1.85a.5.5 0 01.54-.11zm2.53 1.93c-.1-.3-.2-.55-.27-.7a.5.5 0 10-.9.45 4.59 4.59 0 01.45 1.78 3.94 3.94 0 01-.37 1.6l-.08.18a.5.5 0 10.9.44 5.5 5.5 0 00.55-2.22c0-.5-.1-1.02-.28-1.53zM17 14V9.98c.34.06.7 0 1-.18V14a2 2 0 01-2 2H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h5.09a1.5 1.5 0 00-.09.5V5H4a1 1 0 00-1 1v8a1 1 0 001 1h5.5V7.62c.27.24.62.38 1 .38v7H16a1 1 0 001-1zm-11-.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zm6.5-.5a.5.5 0 000 1h1a.5.5 0 000-1h-1z" />
		</svg>
	)
}
export default DualScreenSpeakerIcon
