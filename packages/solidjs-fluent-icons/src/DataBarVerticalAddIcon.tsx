import { splitProps, ComponentProps, JSX } from "solid-js"

function DataBarVerticalAddIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 18a2 2 0 01-2-2V4a2 2 0 114 0v5.6c-.36.18-.7.4-1 .66V4a1 1 0 10-2 0v12a1 1 0 00.55.9c.19.38.42.75.7 1.09L10 18zm8-10v2.26a5.5 5.5 0 00-1-.66V8a1 1 0 10-2 0v1.02a5.57 5.57 0 00-1 0V8a2 2 0 114 0zM2 16a2 2 0 104 0v-4a2 2 0 10-4 0v4zm2 1a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1zm15-2.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H15v-1.5z" />
		</svg>
	)
}
export default DataBarVerticalAddIcon
