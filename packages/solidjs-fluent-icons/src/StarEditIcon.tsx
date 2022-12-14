import { splitProps, ComponentProps, JSX } from "solid-js"

function StarEditIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.9 2.9a1 1 0 00-1.8 0L7.17 6.8l-4.31.63a1 1 0 00-.56 1.7l3.13 3.05-.74 4.3a1 1 0 001.45 1.05l3.43-1.8c.16-.4.4-.76.7-1.07l.1-.09a1 1 0 00-.83.05l-3.87 2.03.74-4.3a1 1 0 00-.29-.89L3 8.43l4.32-.63a1 1 0 00.75-.55L10 3.35l1.93 3.9c.15.3.43.5.75.55l4.32.63-.72.7c.48-.15 1-.17 1.49-.06a1 1 0 00-.63-1.63l-4.31-.63L10.9 2.9zm4.9 7.65l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" />
		</svg>
	)
}
export default StarEditIcon
