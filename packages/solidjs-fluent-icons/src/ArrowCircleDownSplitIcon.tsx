import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowCircleDownSplitIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M8.8 12.41l-1.45 1.44a.5.5 0 01-.7 0L5.2 12.41a.5.5 0 01.7-.7l.59.58V8.5c0-.28.22-.5.5-.5h2.5V5.5a.5.5 0 011 0V8H13c.28 0 .5.22.5.5v3.8l.59-.6a.5.5 0 01.7.71l-1.44 1.44a.5.5 0 01-.7 0l-1.44-1.44a.5.5 0 01.7-.7l.59.58V9h-5v3.3l.59-.6a.5.5 0 11.7.71zM10 18a8 8 0 100-16 8 8 0 000 16zm7-8a7 7 0 11-14 0 7 7 0 0114 0z" />
		</svg>
	)
}
export default ArrowCircleDownSplitIcon
