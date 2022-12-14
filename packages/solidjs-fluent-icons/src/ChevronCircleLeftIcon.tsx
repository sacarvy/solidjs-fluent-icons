import { splitProps, ComponentProps, JSX } from "solid-js"

function ChevronCircleLeftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 3a7 7 0 110 14 7 7 0 010-14zm8 7a8 8 0 10-16 0 8 8 0 0016 0zm-6.15-3.15a.5.5 0 00-.7-.7l-3.5 3.5a.5.5 0 000 .7l3.5 3.5a.5.5 0 00.7-.7L8.71 10l3.14-3.15z" />
		</svg>
	)
}
export default ChevronCircleLeftIcon
