import { splitProps, ComponentProps, JSX } from "solid-js"

function TableSimpleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zm1 5v4c0 .83.67 1.5 1.5 1.5h4v-5.5H4zm5.5-1V4h-4C4.67 4 4 4.67 4 5.5v4h5.5zm1 1V16h4c.83 0 1.5-.67 1.5-1.5v-4h-5.5zm5.5-1v-4c0-.83-.67-1.5-1.5-1.5h-4v5.5H16z" />
		</svg>
	)
}
export default TableSimpleIcon
