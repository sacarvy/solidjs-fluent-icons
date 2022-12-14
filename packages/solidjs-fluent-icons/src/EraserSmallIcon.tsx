import { splitProps, ComponentProps, JSX } from "solid-js"

function EraserSmallIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.44 11.2a1.5 1.5 0 000 2.12l4.24 4.24a1.5 1.5 0 002.12 0l2.22-2.2a4.06 4.06 0 01.18-1.6l-.7.7-4.96-4.95 6.37-6.36c.2-.2.5-.2.7 0l4.25 4.24c.2.2.2.51 0 .7l-3.1 3.1a4 4 0 011.6-.17l2.2-2.22a1.5 1.5 0 000-2.12l-4.24-4.24a1.5 1.5 0 00-2.12 0L2.44 11.2zm.7 1.41a.5.5 0 010-.7l1.7-1.7 4.95 4.96-1.7 1.69a.5.5 0 01-.7 0L3.15 12.6zM15 18a3 3 0 100-6 3 3 0 000 6z" />
		</svg>
	)
}
export default EraserSmallIcon
