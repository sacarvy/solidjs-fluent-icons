import { splitProps, ComponentProps, JSX } from "solid-js"

function MathSymbolsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 5v2.5a.5.5 0 001 0V5h2.5a.5.5 0 000-1H6V1.5a.5.5 0 00-1 0V4H2.5a.5.5 0 000 1H5zm6-.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zM8.85 16.15L6.21 13.5l2.64-2.65a.5.5 0 00-.7-.7L5.5 12.79l-2.65-2.64a.5.5 0 00-.7.7l2.64 2.65-2.64 2.65a.5.5 0 00.7.7l2.65-2.64 2.65 2.64a.5.5 0 00.7-.7zM11.5 13a.5.5 0 000 1h6a.5.5 0 000-1h-6zm4-2a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default MathSymbolsIcon
