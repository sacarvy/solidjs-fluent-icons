import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowHookDownLeftIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 4.5c0-.28.22-.5.5-.5H11c1.64 0 2.9.62 3.75 1.57C15.59 6.52 16 7.77 16 9s-.41 2.48-1.25 3.43A4.85 4.85 0 0111 14H5.7l2.65 2.65a.5.5 0 01-.7.7l-3.5-3.5a.5.5 0 010-.7l3.5-3.5a.5.5 0 11.7.7L5.71 13H11c1.36 0 2.35-.5 3-1.24.66-.74 1-1.74 1-2.76 0-1.02-.34-2.02-1-2.76A3.86 3.86 0 0011 5H6.5a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default ArrowHookDownLeftIcon
