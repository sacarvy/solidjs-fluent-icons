import { splitProps, ComponentProps, JSX } from "solid-js"

function TableMoveBelowIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 16.5a.5.5 0 01-.5.5h-13a.5.5 0 010-1h13c.28 0 .5.22.5.5zm-.5-4.5h-3.88a1.5 1.5 0 00-.62-.41V8H8v3.59a1.5 1.5 0 00-.62.41H3.5a.5.5 0 01-.5-.5V5c0-1.1.9-2 2-2h10a2 2 0 012 2v6.5a.5.5 0 01-.5.5zM16 7V5a1 1 0 00-1-1h-2v3h3zM8 4v3h4V4H8zM7 4H5a1 1 0 00-1 1v2h3V4zm0 4H4v3h3V8zm9 3V8h-3v3h3zm-7.15 1.65a.5.5 0 00-.7.7l1.5 1.5c.2.2.5.2.7 0l1.5-1.5a.5.5 0 00-.7-.7l-.65.64V10.5a.5.5 0 00-1 0v2.8l-.65-.65z" />
		</svg>
	)
}
export default TableMoveBelowIcon
