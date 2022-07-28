import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentTextLinkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2h-3.34c.15-.31.25-.65.3-1H14a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6a1 1 0 00-1 1v9H4V4zm7.5 3h3.3L11 3.2v3.3c0 .28.22.5.5.5zm2 8h-2.84a3.51 3.51 0 00-.71-1h3.55a.5.5 0 010 1zm0-2h-7a.5.5 0 010-1h7a.5.5 0 010 1zm-7-3a.5.5 0 000 1h7a.5.5 0 000-1h-7zm-3 4a2.5 2.5 0 000 5H4a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H4a.5.5 0 000-1h-.5zM7 14a.5.5 0 000 1h.5a1.5 1.5 0 010 3H7a.5.5 0 000 1h.5a2.5 2.5 0 000-5H7zm-4 2.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DocumentTextLinkIcon
