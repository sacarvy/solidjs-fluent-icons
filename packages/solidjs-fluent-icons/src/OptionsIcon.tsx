import { splitProps, ComponentProps, JSX } from "solid-js"

function OptionsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.95 5a2.5 2.5 0 00-4.9 0H2.5a.5.5 0 000 1h7.55a2.5 2.5 0 004.9 0h2.55a.5.5 0 000-1h-2.55zM12.5 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-2.55 7a2.5 2.5 0 00-4.9 0H2.5a.5.5 0 000 1h2.55a2.5 2.5 0 004.9 0h7.55a.5.5 0 000-1H9.95zM7.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
		</svg>
	)
}
export default OptionsIcon
