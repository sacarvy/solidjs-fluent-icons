import { splitProps, ComponentProps, JSX } from "solid-js"

function DragIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.65 2.15c.2-.2.5-.2.7 0l2 2a.5.5 0 01-.7.7L10.5 3.71V6.5a.5.5 0 01-1 0V3.7L8.35 4.86a.5.5 0 11-.7-.7l2-2zM10 12a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2zm5.85 1.35l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7.7l1.14 1.15H13.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7zm-5.5 5.5l2-2a.5.5 0 00-.7-.7l-1.15 1.14V13.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0zm-8.2-7.5a.5.5 0 010-.7l2-2a.5.5 0 11.7.7L3.71 9.5H6.5a.5.5 0 010 1H3.7l1.15 1.15a.5.5 0 01-.7.7l-2-2z" />
		</svg>
	)
}
export default DragIcon
