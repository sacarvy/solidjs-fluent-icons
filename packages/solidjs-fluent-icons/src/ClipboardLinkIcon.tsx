import { splitProps, ComponentProps, JSX } from "solid-js"

function ClipboardLinkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V11h-1V4.5a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h2.76c.12.36.3.7.5 1H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zM19 15.5a3.5 3.5 0 00-3.5-3.5h-.09a.5.5 0 00.09 1h.16a2.5 2.5 0 01-.16 5l-.1.01a.5.5 0 00.1 1V19h.2a3.5 3.5 0 003.3-3.5zm-6-3a.5.5 0 00-.5-.5h-.2a3.5 3.5 0 00.2 7h.09a.5.5 0 00-.09-1h-.16a2.5 2.5 0 01.16-5h.09a.5.5 0 00.41-.5zm2.5 2.5h-3.09a.5.5 0 00.09 1h3.09a.5.5 0 00-.09-1z" />
		</svg>
	)
}
export default ClipboardLinkIcon
