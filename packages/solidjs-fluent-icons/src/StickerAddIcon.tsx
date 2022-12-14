import { splitProps, ComponentProps, JSX } from "solid-js"

function StickerAddIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 6a3 3 0 013-3h8a3 3 0 013 3v3.6c-.32-.16-.65-.3-1-.4V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8c0 1.1.9 2 2 2h3.2c.1.35.24.68.4 1H6a3 3 0 01-3-3V6zm4.97 6.55c.3.15.72.31 1.25.4-.09.3-.16.64-.19.97a5.22 5.22 0 01-2.14-.86 2.93 2.93 0 01-.22-.18l-.01-.02h-.01a.5.5 0 01.7-.72 1 1 0 00.14.12c.1.07.26.18.48.3zM7.5 9a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 11-2 0 1 1 0 012 0zm5.5 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default StickerAddIcon
