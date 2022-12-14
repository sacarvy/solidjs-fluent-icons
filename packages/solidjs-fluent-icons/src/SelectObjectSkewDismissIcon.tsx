import { splitProps, ComponentProps, JSX } from "solid-js"

function SelectObjectSkewDismissIcon(
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
			<path d="M16.49 6h.01a1.5 1.5 0 10-1.41-2l-.01.02a1.5 1.5 0 00.47 1.64c.26.21.58.34.94.34zM2 15.5a1.5 1.5 0 102.92-.48V15a1.5 1.5 0 00-1.4-1H3.5c-.83 0-1.5.67-1.5 1.5zM7.49 6h.01c.65 0 1.2-.42 1.41-1l.01-.02a1.5 1.5 0 10-2.37.68c.26.21.58.34.94.34zm-1.3.63l-2.32 6.4c.34.05.66.17.94.34l2.32-6.4a2.48 2.48 0 01-.94-.34zM14.05 5h-4.1a2.51 2.51 0 000-1h4.1a2.51 2.51 0 000 1zm.45 4c.3 0 .59.02.87.07l.76-2.1a2.48 2.48 0 01-.94-.34L14.33 9h.17zm-5.48 6c.03.34.1.68.19 1H5.95a2.51 2.51 0 000-1h3.07zm9.98-.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" />
		</svg>
	)
}
export default SelectObjectSkewDismissIcon
