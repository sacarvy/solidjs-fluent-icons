import { splitProps } from "solid-js"
function SettingsChatIcon(props) {
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
			<path d="M1.91 7.38A8.5 8.5 0 013.69 4.3a.5.5 0 01.54-.13l1.92.68a1 1 0 001.32-.76l.36-2a.5.5 0 01.4-.4 8.53 8.53 0 013.55 0c.2.04.35.2.38.4l.37 2a1 1 0 001.32.76l1.92-.68a.5.5 0 01.54.13 8.5 8.5 0 011.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 00-.07.06c-.33-.11-.68-.2-1.04-.25a2 2 0 01.46-.57l1.3-1.1a7.5 7.5 0 00-1.25-2.16l-1.6.58a2 2 0 01-2.63-1.53l-.3-1.67a7.55 7.55 0 00-2.5 0l-.3 1.67A2 2 0 015.81 5.8l-1.6-.58a7.5 7.5 0 00-1.24 2.16l1.3 1.1a2 2 0 010 3.04l-1.3 1.1c.3.79.71 1.51 1.25 2.16l1.6-.58a2 2 0 012.63 1.53l.3 1.67.53.07-.22.7-.05.27a8.48 8.48 0 01-.79-.13.5.5 0 01-.39-.4l-.36-2a1 1 0 00-1.32-.76l-1.92.68a.5.5 0 01-.54-.13 8.5 8.5 0 01-1.78-3.08.5.5 0 01.15-.54l1.56-1.32a1 1 0 000-1.52L2.06 7.92a.5.5 0 01-.15-.54zm8.1 11.12a.4.4 0 00.52.48l1.79-.54a4.5 4.5 0 10.13-7.94 4.48 4.48 0 00-1.89 6.19l-.24.8-.3.98a.4.4 0 000 .03zM14.5 15a.5.5 0 010 1h-2a.5.5 0 010-1h2zm2-1h-4a.5.5 0 010-1h4a.5.5 0 110 1zM10 7.5a2.5 2.5 0 012.43 1.9c-.33.14-.64.3-.93.5a1.5 1.5 0 10-1.6 1.6c-.2.29-.36.6-.5.93A2.5 2.5 0 0110 7.5z" />
		</svg>
	)
}
export default SettingsChatIcon
