import { splitProps, ComponentProps, JSX } from "solid-js"

function FlowchartIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 3C3.67 3 3 3.67 3 4.5v2C3 7.33 3.67 8 4.5 8H5v3.84a1 1 0 00-.2.16L3 13.8a1 1 0 000 1.4L4.8 17a1 1 0 001.4 0L8 15.2a1 1 0 00.16-.2H12v.5c0 .83.67 1.5 1.5 1.5h2c.83 0 1.5-.67 1.5-1.5v-2c0-.83-.67-1.5-1.5-1.5h-2c-.83 0-1.5.67-1.5 1.5v.5H8.16a1 1 0 00-.16-.2L6.2 12a1 1 0 00-.2-.16V8h.5C7.33 8 8 7.33 8 6.5v-2C8 3.67 7.33 3 6.5 3h-2zM4 4.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2zm-.3 10l1.8-1.8 1.8 1.8-1.8 1.8-1.8-1.8zm9.8-1.5h2c.28 0 .5.22.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-2c0-.28.22-.5.5-.5z" />
		</svg>
	)
}
export default FlowchartIcon
