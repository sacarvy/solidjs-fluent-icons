import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentChevronDoubleIcon(
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
			<path d="M6 2a2 2 0 00-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-3.6c-.18.36-.4.7-.66 1H14a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM10 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.65-1.15a.5.5 0 00-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7L3.21 14.5l1.14-1.15zm2.3-.7a.5.5 0 000 .7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5a.5.5 0 00-.7 0z" />
		</svg>
	)
}
export default DocumentChevronDoubleIcon
