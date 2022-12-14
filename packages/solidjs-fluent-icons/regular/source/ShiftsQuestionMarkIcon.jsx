import { splitProps } from "solid-js"
function ShiftsQuestionMarkIcon(props) {
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
			<path d="M6 3a3 3 0 00-3 3v3.6c.32-.16.65-.3 1-.4V6c0-1.1.9-2 2-2h8a2 2 0 012 2v8a2 2 0 01-2 2h-3.2c-.1.35-.24.68-.4 1H14a3 3 0 003-3V6a3 3 0 00-3-3H6zm5 3.5a.5.5 0 00-1 0v3c0 .28.22.5.5.5h2a.5.5 0 000-1H11V6.5zm-1 8a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.5 1.88a.62.62 0 100 1.25.62.62 0 000-1.25zm0-4.88c-1.05 0-1.86.82-1.85 1.96a.5.5 0 101-.01c0-.58.36-.95.85-.95.47 0 .85.4.85.95 0 .2-.07.32-.36.55l-.27.21c-.51.4-.72.72-.72 1.29a.5.5 0 001 .09v-.16c.02-.14.1-.25.35-.44l.28-.22c.5-.4.72-.73.72-1.32 0-1.1-.82-1.95-1.85-1.95z" />
		</svg>
	)
}
export default ShiftsQuestionMarkIcon
