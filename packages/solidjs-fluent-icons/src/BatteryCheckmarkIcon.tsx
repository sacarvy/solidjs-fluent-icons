import { splitProps, ComponentProps, JSX } from "solid-js"

function BatteryCheckmarkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M13.5 5A2.5 2.5 0 0116 7.5v.83h1.17a.83.83 0 01.83.84v1.67a.83.83 0 01-.83.83H16v.83a2.5 2.5 0 01-2.5 2.5h-2.7c.09-.34.15-.7.18-1.06h2.77c.65 0 1.18-.5 1.24-1.12l.01-.13V7.2c0-.64-.5-1.17-1.12-1.24H4.5c-.65 0-1.4.5-1.5 1.13V8.6c-.36.18-.7.4-1 .66V7.5A2.5 2.5 0 014.5 5h9zM10 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15-1.85a.5.5 0 00-.7 0L4.5 14.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l3-3a.5.5 0 000-.7z" />
		</svg>
	)
}
export default BatteryCheckmarkIcon
