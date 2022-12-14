import { splitProps, ComponentProps, JSX } from "solid-js"

function StreamIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 9a6 6 0 016-6h.5a.5.5 0 000-1H13a7 7 0 00-7 7v1a1 1 0 01-1 1H2.5a.5.5 0 000 1H5a2 2 0 002-2V9zm6.5-3A3.5 3.5 0 0010 9.5v1A4.5 4.5 0 015.5 15h-3a.5.5 0 010-1h3A3.5 3.5 0 009 10.5v-1A4.5 4.5 0 0113.5 5h4a.5.5 0 010 1h-4zm.5 3a1 1 0 00-1 1v1a7 7 0 01-7 7h-.5a.5.5 0 010-1H6a6 6 0 006-6v-1c0-1.1.9-2 2-2h3.5a.5.5 0 010 1H14z" />
		</svg>
	)
}
export default StreamIcon
