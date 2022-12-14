import { splitProps, ComponentProps, JSX } from "solid-js"

function AccessibilityIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.5 4.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM10 2a2.5 2.5 0 00-2.43 3.08l-2.1-.93c-.88-.4-1.92 0-2.32.88-.4.88 0 1.92.88 2.31L7 8.66v2.29l-1.88 4.64a1.75 1.75 0 003.25 1.32l1.55-3.85.03-.04L10 13h.04l.03.05 1.56 3.84a1.75 1.75 0 003.24-1.3L13 10.95v-2.3l2.97-1.32c.88-.4 1.28-1.43.88-2.31a1.76 1.76 0 00-2.32-.88l-2.1.93A2.51 2.51 0 0010 2zM4.07 5.44a.76.76 0 011-.38l3.91 1.75a2.5 2.5 0 002.04 0l3.91-1.75c.38-.17.83 0 1 .38.18.38 0 .82-.37.99L12.6 7.75a1 1 0 00-.59.91v2.3a1 1 0 00.07.37l1.87 4.64a.75.75 0 01-1.39.56L11 12.68c-.36-.9-1.64-.9-2 0l-1.56 3.85a.75.75 0 11-1.39-.56l1.88-4.65a1 1 0 00.07-.37V8.66a1 1 0 00-.6-.91L4.45 6.43a.74.74 0 01-.37-.99z" />
		</svg>
	)
}
export default AccessibilityIcon
