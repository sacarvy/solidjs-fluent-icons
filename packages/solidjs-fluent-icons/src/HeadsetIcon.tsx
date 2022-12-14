import { splitProps, ComponentProps, JSX } from "solid-js"

function HeadsetIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 8a6 6 0 1112 0v3a2 2 0 01-2 2h-1a1 1 0 01-1-1V9a1 1 0 011-1h2A5 5 0 005 8h2a1 1 0 011 1v3a1 1 0 01-1 1H5v1c0 1.1.9 2 2 2h1a2 2 0 11.27 1H7a3 3 0 01-3-3V8zm11 1h-2v3h1a1 1 0 001-1V9zM5 12h2V9H5v3zm4 4a1 1 0 102 0 1 1 0 00-2 0z" />
		</svg>
	)
}
export default HeadsetIcon
