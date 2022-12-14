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
			<path d="M1.91 7.38A8.5 8.5 0 013.69 4.3a.5.5 0 01.54-.13l1.92.68a1 1 0 001.32-.76l.36-2a.5.5 0 01.4-.4 8.53 8.53 0 013.55 0c.2.04.35.2.38.4l.37 2a1 1 0 001.32.76l1.92-.68a.5.5 0 01.54.13 8.5 8.5 0 011.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 00-.07.06 5.5 5.5 0 00-4.35.32 2 2 0 10-2.34 2.34 5.48 5.48 0 00-.13 4.81l-.43 1.4-.05.27a8.48 8.48 0 01-.79-.13.5.5 0 01-.39-.4l-.36-2a1 1 0 00-1.32-.76l-1.92.68a.5.5 0 01-.54-.13 8.5 8.5 0 01-1.78-3.08.5.5 0 01.15-.54l1.56-1.32a1 1 0 000-1.52L2.06 7.92a.5.5 0 01-.15-.54zm8.1 11.12a.4.4 0 00.52.48l1.79-.54A4.5 4.5 0 1014.5 10a4.49 4.49 0 00-2.72.92 4.48 4.48 0 00-1.21 5.77l-.55 1.78a.4.4 0 000 .03zM14.5 15a.5.5 0 010 1h-2a.5.5 0 010-1h2zm-2-2h4a.5.5 0 110 1h-4a.5.5 0 010-1z" />
		</svg>
	)
}
export default SettingsChatIcon
