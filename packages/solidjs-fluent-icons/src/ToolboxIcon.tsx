import { splitProps, ComponentProps, JSX } from "solid-js"

function ToolboxIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 4.5V6H4a2 2 0 00-2 2v7c0 1.1.9 2 2 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-2V4.5c0-.83-.67-1.5-1.5-1.5h-5C6.67 3 6 3.67 6 4.5zM7.5 4h5c.28 0 .5.22.5.5V6H7V4.5c0-.28.22-.5.5-.5zM4 7h12a1 1 0 011 1v2h-3v-.5a.5.5 0 00-1 0v.5H7v-.5a.5.5 0 00-1 0v.5H3V8a1 1 0 011-1zm9 4v.5a.5.5 0 001 0V11h3v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4h3v.5a.5.5 0 001 0V11h6z" />
		</svg>
	)
}
export default ToolboxIcon
