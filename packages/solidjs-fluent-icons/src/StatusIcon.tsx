import { splitProps, ComponentProps, JSX } from "solid-js"

function StatusIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17.35 2.65a2.62 2.62 0 00-3.7 0l-5.5 5.5a.5.5 0 00-.14.23l-1 4a.5.5 0 00.61.6l4-1a.5.5 0 00.23-.13l5.5-5.5a2.62 2.62 0 000-3.7zm-3 .7a1.62 1.62 0 012.3 2.3l-5.4 5.4-3.06.76.76-3.05 5.4-5.4zM10 4c.28 0 .55.02.82.06l.86-.86A7.02 7.02 0 003 10a7 7 0 1013.8-1.68l-.86.86A6 6 0 1110 4z" />
		</svg>
	)
}
export default StatusIcon
