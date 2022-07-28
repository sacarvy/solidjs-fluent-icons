import { splitProps } from "solid-js"
function CallConnectingIcon(props) {
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
			<path d="M3.55 2.44a4.1 4.1 0 012.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 01-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 013.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 01-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 01-2.03-7.06 2.87 2.87 0 011.51-2.5zm9.2-.38a.5.5 0 10-.5.88l.4.21a8.5 8.5 0 014.32 6.58l.03.32a.5.5 0 101-.1l-.03-.32a9.5 9.5 0 00-4.84-7.35l-.39-.22zm-1.18 2.68a.5.5 0 01.69-.17l.12.07a6.5 6.5 0 013.07 4.51l.04.27a.5.5 0 11-.98.16l-.05-.27a5.5 5.5 0 00-2.6-3.8l-.12-.08a.5.5 0 01-.17-.69z" />
		</svg>
	)
}
export default CallConnectingIcon
