import { splitProps, ComponentProps, JSX } from "solid-js"

function TextDirectionRotate90LeftIcon(
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
			<path d="M17 13.5c0 .2-.13.4-.32.47l-8 3a.5.5 0 11-.36-.94l2.68-1v-3.06l-2.68-1a.5.5 0 11.36-.94l8 3c.2.07.32.26.32.47zm-1.92 0L12 12.35v2.3l3.08-1.15zM5 16.5a.5.5 0 101 0V4.7l1.15 1.15a.5.5 0 00.7-.7l-2-2A.5.5 0 005.5 3a.5.5 0 00-.35.15l-2 2a.5.5 0 10.7.7L5 4.71V16.5zm8-7a.5.5 0 001 0V4.7l1.15 1.15a.5.5 0 00.7-.7l-2-2a.5.5 0 00-.7 0l-2 2a.5.5 0 00.7.7L13 4.71V9.5z" />
		</svg>
	)
}
export default TextDirectionRotate90LeftIcon
