import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowTrendingCheckmarkIcon(
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
			<path d="M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 01-1 0V4.7l-4.65 4.65a.5.5 0 01-.7 0L9 7.71l-5.15 5.14a.5.5 0 01-.7-.7l5.5-5.5a.5.5 0 01.7 0L11 8.29 15.3 4h-2.8a.5.5 0 010-1h4zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.62-1.83a.5.5 0 00-.7-.05l-3.15 2.7-1.18-1.17a.5.5 0 00-.7.7l1.5 1.5c.18.19.48.2.68.03l3.5-3a.5.5 0 00.05-.7z" />
		</svg>
	)
}
export default ArrowTrendingCheckmarkIcon
