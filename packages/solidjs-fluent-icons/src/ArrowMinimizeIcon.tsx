import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowMinimizeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3.5 11h5a.5.5 0 01.5.41v5.09a.5.5 0 01-1 .09V12.7l-5.15 5.15a.5.5 0 01-.76-.63l.06-.07L7.29 12H3.5a.5.5 0 01-.5-.41v-.09a.5.5 0 01.41-.5H8.5h-5zm14.35-8.85c.18.17.2.44.06.63l-.06.07L12.71 8h3.79a.5.5 0 01.5.41v.09a.5.5 0 01-.41.5h-5.18l-.1-.04-.08-.04-.05-.04-.03-.03-.04-.04-.04-.06-.03-.06-.02-.06V8.6a.5.5 0 01-.02-.1v.07V3.5a.5.5 0 011-.09V7.3l5.15-5.15c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default ArrowMinimizeIcon
