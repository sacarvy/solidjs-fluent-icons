import { splitProps } from "solid-js"
function PuzzlePieceShieldIcon(props) {
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
			<path d="M5 15.06V12.7c.18.08.36.15.55.21.29.1.61.1.9 0a6.77 6.77 0 003.39-2.38A6.63 6.63 0 0011 6.58V4.04l-.02-.19v-.04A1.4 1.4 0 009.5 2.67 2 2 0 0113 4v.06h3a1 1 0 011 1V8h-1a2 2 0 00-2 1.85V10a2 2 0 001.85 2H17v3.06a1 1 0 01-1 1h-3v.09a2 2 0 01-4-.1H6a1 1 0 01-1-1zM8 3.35a4.06 4.06 0 001.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 01-.26 0A6.66 6.66 0 014 11c-.39-.3-.72-.63-.99-1a5.5 5.5 0 01-1-3.15L2 6.58v-2.5a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0C6.82 2.7 7.4 3.1 8 3.35z" />
		</svg>
	)
}
export default PuzzlePieceShieldIcon
