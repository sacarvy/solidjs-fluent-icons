import { splitProps, ComponentProps, JSX } from "solid-js"

function TagOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.79 6.5L2.15 2.84a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-3.6-3.58-2.75 2.76a2 2 0 01-2.83 0l-4.95-4.95a2 2 0 010-2.83L5.8 6.49zm7.06 7.06L6.5 7.2 3.73 9.96a1 1 0 000 1.41l4.95 4.95a1 1 0 001.41 0l2.76-2.76zm3.87-3.87l-2.45 2.45.7.71 2.46-2.45A2 2 0 0018 8.98V4.03a2 2 0 00-1.99-2L11.12 2a2 2 0 00-1.42.58l-2.5 2.5.7.7 2.51-2.49a1 1 0 01.71-.29l4.9.03a1 1 0 01.99 1v4.95a1 1 0 01-.29.7zM14 7a1 1 0 100-2 1 1 0 000 2z" />
		</svg>
	)
}
export default TagOffIcon
