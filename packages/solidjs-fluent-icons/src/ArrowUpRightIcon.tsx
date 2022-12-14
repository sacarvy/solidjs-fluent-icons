import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowUpRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.5 4a.5.5 0 110-1h8c.28 0 .5.22.5.5v8a.5.5 0 01-1 0V4.7L3.85 16.86a.5.5 0 01-.7-.7L15.29 4H8.5z" />
		</svg>
	)
}
export default ArrowUpRightIcon
