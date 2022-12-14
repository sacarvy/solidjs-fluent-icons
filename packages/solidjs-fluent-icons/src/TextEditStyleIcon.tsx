import { splitProps, ComponentProps, JSX } from "solid-js"

function TextEditStyleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.09 6.7a2.26 2.26 0 013.07-.12l.13.12.12.13c.73.85.73 2.1 0 2.96l-.12.13-6.87 6.9a1.5 1.5 0 01-.55.35l-.16.05-3.08.76a.5.5 0 01-.62-.53l.01-.08.8-3.07c.05-.21.15-.4.28-.57l.1-.12 6.89-6.9zm2.5.7a1.26 1.26 0 00-1.7-.08l-.1.09-6.88 6.9a.5.5 0 00-.1.15l-.03.08-.58 2.27 2.27-.56a.5.5 0 00.12-.05l.05-.03.07-.06 6.87-6.9c.5-.5.5-1.3 0-1.8zM6.41 2.24l.05.08 2.98 7.63-.77.78L8 9H4l-1.03 2.68a.5.5 0 01-.56.3l-.1-.02a.5.5 0 01-.3-.56l.02-.08 3.5-9a.5.5 0 01.9-.1zM6 3.87L4.4 8H7.6l-1.6-4.13z" />
		</svg>
	)
}
export default TextEditStyleIcon
