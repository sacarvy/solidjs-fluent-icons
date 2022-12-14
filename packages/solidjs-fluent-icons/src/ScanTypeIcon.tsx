import { splitProps, ComponentProps, JSX } from "solid-js"

function ScanTypeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 3C3.67 3 3 3.67 3 4.5v2a.5.5 0 01-1 0v-2A2.5 2.5 0 014.5 2h2a.5.5 0 010 1h-2zM5 17a2 2 0 01-2-2v-1.5a.5.5 0 00-1 0V15a3 3 0 003 3h1.5a.5.5 0 000-1H5zM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 010-1h2A2.5 2.5 0 0118 4.5v2a.5.5 0 01-1 0v-2zM15 17a2 2 0 002-2v-1.5a.5.5 0 011 0V15a3 3 0 01-3 3h-1.5a.5.5 0 010-1H15zM6.5 5a.5.5 0 00-.5.5v1a.5.5 0 001 0V6h2.5v8H9a.5.5 0 000 1h2a.5.5 0 000-1h-.5V6H13v.5a.5.5 0 001 0v-1a.5.5 0 00-.5-.5h-7z" />
		</svg>
	)
}
export default ScanTypeIcon
