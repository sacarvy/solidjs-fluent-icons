import { splitProps, ComponentProps, JSX } from "solid-js"

function CalligraphyPenIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 2.5a.5.5 0 00-1 0v2C5 5.33 5.67 6 6.5 6h.21L5.25 9.08a2.5 2.5 0 00.1 2.33l3.47 5.91a1.37 1.37 0 002.36 0l3.47-5.9a2.5 2.5 0 00.1-2.34L13.29 6h.21c.83 0 1.5-.67 1.5-1.5v-2a.5.5 0 00-1 0v2a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-2zM12.18 6l1.67 3.5c.2.46.18.98-.07 1.4l-3.28 5.61v-5.64a1 1 0 10-1 0v5.64l-3.28-5.6a1.5 1.5 0 01-.07-1.4L7.82 6h4.36z" />
		</svg>
	)
}
export default CalligraphyPenIcon
