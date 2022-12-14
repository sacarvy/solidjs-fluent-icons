import { splitProps, ComponentProps, JSX } from "solid-js"

function BuildingBankToolboxIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9 5.87a.83.83 0 100-1.66.83.83 0 000 1.66zM2.5 17H9v-1H3v-.83c0-.65.52-1.17 1.17-1.17H9v-.5c0-.56.19-1.08.5-1.5V8H11v3.05h.04A2.5 2.5 0 0112 9.5V8h2v1h1V8h.1a.92.92 0 00.52-1.67L9.77 2.18a1.33 1.33 0 00-1.54 0L2.38 6.33A.92.92 0 002.9 8H3v5.34c-.6.38-1 1.06-1 1.83v1.33c0 .28.22.5.5.5zM8.8 3a.33.33 0 01.4 0l5.63 4H3.17L8.8 3zM4 13V8h2v5H4zm4.5 0H7V8h1.5v5zm3.5-1v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 10-1 0v.5h-3v-.5a.5.5 0 10-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 101 0V16h3v.5a.5.5 0 101 0V16z" />
		</svg>
	)
}
export default BuildingBankToolboxIcon
