import { splitProps, ComponentProps, JSX } from "solid-js"

function TextDirectionRotate270RightIcon(
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
			<path d="M8.85 5.15a.5.5 0 11-.7.7L7 4.71V9.5a.5.5 0 01-1 0V4.7L4.85 5.86a.5.5 0 11-.7-.7l2-2c.2-.2.5-.2.7 0l2 2zm8 0a.5.5 0 11-.7.7L15 4.71V16.5a.5.5 0 01-1 0V4.7l-1.15 1.15a.5.5 0 11-.7-.7l2-2c.2-.2.5-.2.7 0l2 2zM3 13.5c0-.2.13-.4.32-.47l8-3a.5.5 0 01.36.94l-2.68 1v3.06l2.68 1a.5.5 0 01-.36.94l-8-3A.5.5 0 013 13.5zm1.92 0L8 14.65v-2.3L4.92 13.5z" />
		</svg>
	)
}
export default TextDirectionRotate270RightIcon
