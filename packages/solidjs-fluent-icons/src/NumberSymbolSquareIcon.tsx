import { splitProps, ComponentProps, JSX } from "solid-js"

function NumberSymbolSquareIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.1 6.01a.5.5 0 01.39.6L9.19 8h2.48L12 6.4a.5.5 0 01.98.2l-.3 1.4h.81a.5.5 0 010 1h-1.02l-.43 2H13a.5.5 0 010 1h-1.17l-.34 1.6a.5.5 0 11-.98-.2l.3-1.4H8.33L8 13.6a.5.5 0 11-.98-.2l.3-1.4H6.5a.5.5 0 010-1h1.02l.43-2H7a.5.5 0 010-1h1.17l.34-1.6a.5.5 0 01.6-.39zM8.55 11h2.47l.43-2H8.98l-.43 2zM3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zM5.5 4C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-9c0-.83-.67-1.5-1.5-1.5h-9z" />
		</svg>
	)
}
export default NumberSymbolSquareIcon
