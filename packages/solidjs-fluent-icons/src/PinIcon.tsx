import { splitProps, ComponentProps, JSX } from "solid-js"

function PinIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.12 3.14a2 2 0 013.2-.52l4.06 4.05a2 2 0 01-.52 3.2l-3.46 1.74a1.5 1.5 0 00-.72.78L11.25 16a1 1 0 01-1.64.33L7 13.7 3.7 17H3v-.7L6.3 13l-2.62-2.61a1 1 0 01.34-1.64L7.6 7.32c.34-.14.62-.4.78-.72l1.73-3.46zm2.5.18a1 1 0 00-1.6.26L9.29 7.04a2.5 2.5 0 01-1.31 1.2L4.39 9.69l5.93 5.93 1.43-3.59a2.5 2.5 0 011.2-1.3l3.46-1.74a1 1 0 00.26-1.6l-4.05-4.06z" />
		</svg>
	)
}
export default PinIcon
