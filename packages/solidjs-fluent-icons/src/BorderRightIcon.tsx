import { splitProps, ComponentProps, JSX } from "solid-js"

function BorderRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 11.5a.5.5 0 001 0v-3a.5.5 0 00-1 0v3zm1.05 2.96a2 2 0 001.55 1.5.5.5 0 01.4.59.5.5 0 01-.66.38 3 3 0 01-2.29-2.34.5.5 0 01.4-.6.5.5 0 01.6.47zm10.61 2.47a.5.5 0 01-.66-.38.5.5 0 01.46-.6A2 2 0 0016 14V6a2 2 0 00-1.6-1.95.5.5 0 01-.4-.6.5.5 0 01.66-.38A3 3 0 0117 6v8a3 3 0 01-2.34 2.93zM3.06 5.4a3 3 0 012.36-2.36.5.5 0 01.58.4.5.5 0 01-.46.6 2 2 0 00-1.5 1.55.5.5 0 01-.59.4.5.5 0 01-.4-.59zM12 3.5a.5.5 0 01-.5.5h-3a.5.5 0 010-1h3c.28 0 .5.22.5.5zM11.5 17a.5.5 0 000-1h-3a.5.5 0 000 1h3z" />
		</svg>
	)
}
export default BorderRightIcon
