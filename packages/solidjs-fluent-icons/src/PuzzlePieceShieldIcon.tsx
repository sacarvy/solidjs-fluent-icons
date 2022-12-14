import { splitProps, ComponentProps, JSX } from "solid-js"

function PuzzlePieceShieldIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 14.5v-1.79a9 9 0 00.54.21c.15.05.3.08.46.08v1.5c0 .28.22.5.5.5h3v.75a1.25 1.25 0 002.5 0V15h3.5a.5.5 0 00.5-.5v-2.25H15.06A2.25 2.25 0 0113 9.97v-.16a2.25 2.25 0 012.25-2.07H16V5.5a.5.5 0 00-.41-.49H12.5v-.76a1.25 1.25 0 00-1.85-1.1c-.24-.28-.59-.47-1-.48.37-.38.88-.63 1.44-.66l.16-.01c1.14 0 2.08.85 2.23 1.94V4h2.02c.78 0 1.42.6 1.5 1.36v3.39h-1.75c-.65 0-1.2.5-1.25 1.13V10c0 .65.5 1.2 1.13 1.24l.12.01H17v3.25c0 .83-.67 1.5-1.5 1.5h-2.52v.06a2.25 2.25 0 01-2.08 1.93l-.15.01a2.25 2.25 0 01-2.23-1.94V16H6.5A1.5 1.5 0 015 14.65v-.15zM8 3.35a4.06 4.06 0 001.6.32c.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.38.38 0 01-.26 0A6.66 6.66 0 014 11c-.39-.3-.72-.63-.99-1a5.5 5.5 0 01-1-3.15L2 6.58v-2.5a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0C6.82 2.7 7.4 3.1 8 3.35z" />
		</svg>
	)
}
export default PuzzlePieceShieldIcon
