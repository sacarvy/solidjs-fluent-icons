import { splitProps, ComponentProps, JSX } from "solid-js"

function CallWarningIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M12.6 1.55l-3.5 7A1 1 0 0010 10h7a1 1 0 00.9-1.45l-3.5-7a1 1 0 00-1.8 0zM14 3.5v3a.5.5 0 11-1 0v-3a.5.5 0 111 0zM13.5 9a.5.5 0 110-1 .5.5 0 010 1zM3.55 2.44a4.1 4.1 0 012.99-.32c.5.12.94.45 1.2.9l.97 1.7a2.5 2.5 0 01-.67 3.24l-.6.45c-.28.22-.4.52-.34.78.18.8.59 1.56 1.15 2.12.17.16.47.22.8.1l.66-.26a2.5 2.5 0 013.07 1.11l.95 1.7c.27.48.31 1.04.12 1.54a3.9 3.9 0 01-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 01-2.03-7.06 2.87 2.87 0 011.51-2.5zm.49.88c-.59.32-.98.88-1 1.65-.04 1.61.33 3.85 1.9 6.53a15.3 15.3 0 004.62 5.15 1.9 1.9 0 001.91.16 2.91 2.91 0 001.45-1.65.84.84 0 00-.06-.7l-.95-1.7a1.5 1.5 0 00-1.85-.68l-.66.26c-.58.22-1.33.2-1.85-.32a5.32 5.32 0 01-1.42-2.61c-.17-.73.2-1.4.71-1.8l.6-.45c.6-.45.78-1.29.4-1.94l-.97-1.7a.93.93 0 00-.58-.43 3.1 3.1 0 00-2.25.23z" />
		</svg>
	)
}
export default CallWarningIcon
