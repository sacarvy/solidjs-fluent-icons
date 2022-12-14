import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentTextIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.5 10a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zm0 2a.5.5 0 000 1h7a.5.5 0 000-1h-7zM4 4c0-1.1.9-2 2-2h4.59c.4 0 .78.16 1.06.44l3.91 3.91c.28.28.44.67.44 1.06V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v12a1 1 0 001 1h8a1 1 0 001-1V8h-3.5A1.5 1.5 0 0110 6.5V3H6zm5.5 4h3.3L11 3.2v3.3c0 .28.22.5.5.5z" />
		</svg>
	)
}
export default DocumentTextIcon
