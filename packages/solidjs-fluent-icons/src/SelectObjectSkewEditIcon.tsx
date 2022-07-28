import { splitProps, ComponentProps, JSX } from "solid-js"

function SelectObjectSkewEditIcon(
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
			<path d="M16.49 6h.01a1.5 1.5 0 10-1.41-2l-.01.02a1.5 1.5 0 00.47 1.64c.26.21.58.34.94.34zM2 15.5a1.5 1.5 0 102.92-.48V15a1.5 1.5 0 00-1.4-1H3.5c-.83 0-1.5.67-1.5 1.5zM7.49 6h.01c.65 0 1.2-.42 1.41-1l.01-.02a1.5 1.5 0 10-2.37.68c.26.21.58.34.94.34zm-1.3.63l-2.32 6.4c.34.05.66.17.94.34l2.32-6.4a2.48 2.48 0 01-.94-.34zM14.05 5h-4.1a2.51 2.51 0 000-1h4.1a2.51 2.51 0 000 1zm-.64 6.53l1.67-1.67 1.05-2.89a2.48 2.48 0 01-.94-.34l-1.78 4.9zM5.95 16h3.52c.11-.36.29-.7.52-1H5.95a2.51 2.51 0 010 1zm5.03-.62l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default SelectObjectSkewEditIcon
