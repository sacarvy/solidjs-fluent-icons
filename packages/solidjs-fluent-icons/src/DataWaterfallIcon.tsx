import { splitProps, ComponentProps, JSX } from "solid-js"

function DataWaterfallIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M1 3.5c0-.28.22-.5.5-.5H7a2 2 0 012 2v4.5h6c1.04 0 2 .74 2 1.8V16h1.5a.5.5 0 010 1H13c-1.04 0-2-.74-2-1.8v-4.7H5a2 2 0 01-2-2V4H1.5a.5.5 0 01-.5-.5zM4 4v4.5a1 1 0 001 1h3V5a1 1 0 00-1-1H4zm12 12v-4.7c0-.38-.38-.8-1-.8h-3v4.7c0 .38.38.8 1 .8h3z" />
		</svg>
	)
}
export default DataWaterfallIcon
