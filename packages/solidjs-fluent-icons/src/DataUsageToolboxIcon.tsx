import { splitProps, ComponentProps, JSX } from "solid-js"

function DataUsageToolboxIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9 9a.5.5 0 00-.5.5v3a.5.5 0 00.55.5c.08-.37.23-.71.45-1V9.5A.5.5 0 009 9zm-5 6h5v1H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h10a2 2 0 012 2v5.05a2.51 2.51 0 00-.5-.05H15V4a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1zm9-9.5v3.55c-.37.07-.7.23-1 .45v-4a.5.5 0 011 0zm-8 2a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zm7 4.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" />
		</svg>
	)
}
export default DataUsageToolboxIcon
