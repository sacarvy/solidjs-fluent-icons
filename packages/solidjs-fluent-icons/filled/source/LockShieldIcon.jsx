import { splitProps } from "solid-js"
function LockShieldIcon(props) {
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
			<path d="M10 2a3 3 0 013 3v1h1a2 2 0 012 2v1.23c-.33-.19-.66-.45-1-.8a1.39 1.39 0 00-2 0 3.5 3.5 0 01-2.6 1.24c-.81 0-1.4.67-1.4 1.41v2.8c.04 1.16.3 2.2.82 3.12H6a2 2 0 01-2-2V8c0-1.1.9-2 2-2h1V5a3 3 0 013-3zm0 2a1 1 0 00-1 1v1h2V5a1 1 0 00-1-1zm4.28 5.12c.54.57 1.11.97 1.72 1.23a4.06 4.06 0 001.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 01-.26 0A6.66 6.66 0 0112 18c-.39-.3-.72-.63-.99-1a5.5 5.5 0 01-1-3.15l-.01-.27v-2.5a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0z" />
		</svg>
	)
}
export default LockShieldIcon
