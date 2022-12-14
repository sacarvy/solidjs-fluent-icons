import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentLandscapeSplitHintIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M3 6a1 1 0 011-1h.5a.5.5 0 000-1H4a2 2 0 00-2 2v.5a.5.5 0 001 0V6zm6.5-2a.5.5 0 00-.5.5v11c0 .28.22.5.5.5H16a2 2 0 002-2V9.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0012.59 4H9.5zm.5 11V5h2v3.5c0 .83.67 1.5 1.5 1.5H17v4a1 1 0 01-1 1h-6zm3.5-6a.5.5 0 01-.5-.5V5.2L16.8 9h-3.3zM3 14a1 1 0 001 1h.5a.5.5 0 010 1H4a2 2 0 01-2-2v-.5a.5.5 0 011 0v.5zm0-5.5a.5.5 0 00-1 0v3a.5.5 0 001 0v-3zm3-4c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5zM6.5 15a.5.5 0 000 1h1a.5.5 0 000-1h-1z" />
		</svg>
	)
}
export default DocumentLandscapeSplitHintIcon
