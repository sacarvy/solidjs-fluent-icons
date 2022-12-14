import { splitProps, ComponentProps, JSX } from "solid-js"

function StarOneQuarterIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.9 2.9a1 1 0 00-1.8 0L8 5.13l-.83 1.68-4.31.63a1 1 0 00-.56 1.7l3.13 3.05-.74 4.3a1 1 0 001.45 1.05L10 15.51l3.86 2.03a1 1 0 001.45-1.05l-.73-4.3 3.12-3.05a1 1 0 00-.55-1.7l-4.32-.63L10.9 2.9zM8 15.43V7.37a1 1 0 00.07-.12L10 3.35l1.93 3.9c.15.3.43.5.76.55l4.31.63-3.12 3.04a1 1 0 00-.29.89l.74 4.3-3.86-2.03a1 1 0 00-.93 0l-1.54.8z" />
		</svg>
	)
}
export default StarOneQuarterIcon
