import { splitProps, ComponentProps, JSX } from "solid-js"

function LockShieldIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 2a3 3 0 013 3v1h1a2 2 0 012 2v1.23c-.33-.19-.66-.45-1-.8V8a1 1 0 00-1-1H6a1 1 0 00-1 1v7a1 1 0 001 1h3.38c.11.35.26.68.44 1H6a2 2 0 01-2-2V8c0-1.1.9-2 2-2h1V5a3 3 0 013-3zm0 1a2 2 0 00-2 2v1h4V5a2 2 0 00-2-2zm5 6.76a4.63 4.63 0 002 .86c.2.03.4.05.6.05.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 01-.26 0A6.66 6.66 0 0112 18a4.96 4.96 0 01-1.56-2 6.05 6.05 0 01-.44-2.15v-2.77a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0c.24.25.48.46.72.64z" />
		</svg>
	)
}
export default LockShieldIcon
