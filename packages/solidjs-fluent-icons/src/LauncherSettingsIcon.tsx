import { splitProps, ComponentProps, JSX } from "solid-js"

function LauncherSettingsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M1.91 7.38A8.5 8.5 0 013.7 4.3a.5.5 0 01.54-.13l1.92.68a1 1 0 001.32-.76l.36-2a.5.5 0 01.4-.4 8.53 8.53 0 013.55 0c.2.04.35.2.38.4l.37 2a1 1 0 001.32.76l1.92-.68a.5.5 0 01.54.13 8.5 8.5 0 011.78 3.08c.06.2 0 .4-.15.54l-1.56 1.32a1 1 0 000 1.52l1.56 1.32a.5.5 0 01.15.54 8.5 8.5 0 01-1.78 3.08.5.5 0 01-.54.13l-1.92-.68a1 1 0 00-1.32.76l-.37 2a.5.5 0 01-.38.4 8.53 8.53 0 01-3.56 0 .5.5 0 01-.39-.4l-.36-2a1 1 0 00-1.32-.76l-1.92.68a.5.5 0 01-.54-.13 8.5 8.5 0 01-1.78-3.08.5.5 0 01.15-.54l1.56-1.32a1 1 0 000-1.52L2.06 7.92a.5.5 0 01-.15-.54zm1.06 0l1.3 1.1a2 2 0 010 3.04l-1.3 1.1c.3.79.72 1.51 1.25 2.16l1.6-.58a2 2 0 012.63 1.53l.3 1.67a7.56 7.56 0 002.5 0l.3-1.67a2 2 0 012.64-1.53l1.6.58a7.5 7.5 0 001.24-2.16l-1.3-1.1a2 2 0 010-3.04l1.3-1.1a7.5 7.5 0 00-1.25-2.16l-1.6.58a2 2 0 01-2.63-1.53l-.3-1.67a7.55 7.55 0 00-2.5 0l-.3 1.67A2 2 0 015.81 5.8l-1.6-.58a7.5 7.5 0 00-1.24 2.16zm5.13.4l-1.58 1.9a.5.5 0 000 .64l1.39 1.67c.1.12.28.12.38 0l.93-1.11a.25.25 0 000-.32L8.75 10l.6-.72-1.25-1.5zM8.75 7h2.5l2.23 2.68a.5.5 0 010 .64l-2.16 2.59a.25.25 0 01-.19.09H9.28a.25.25 0 01-.19-.41L11.25 10l-2.5-3z" />
		</svg>
	)
}
export default LauncherSettingsIcon
