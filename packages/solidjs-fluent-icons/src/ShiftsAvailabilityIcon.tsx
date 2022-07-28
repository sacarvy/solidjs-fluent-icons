import { splitProps, ComponentProps, JSX } from "solid-js"

function ShiftsAvailabilityIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.92 6.08a5 5 0 10-5.84 5.84c-.05.32-.08.66-.08 1A6 6 0 1112.92 6c-.34 0-.68.03-1 .08zm-.57 4.57a.5.5 0 00-.7.7L12.29 13l-1.64 1.65a.5.5 0 00.7.7L13 13.71l1.65 1.64a.5.5 0 00.7-.7L13.71 13l1.64-1.65a.5.5 0 00-.7-.7L13 12.29l-1.65-1.64zM13 19a6 6 0 100-12 6 6 0 000 12zm0-1a5 5 0 110-10 5 5 0 010 10zM9.35 5.35a.5.5 0 10-.7-.7L6 7.29 4.85 6.15a.5.5 0 10-.7.7l1.5 1.5c.2.2.5.2.7 0l3-3z" />
		</svg>
	)
}
export default ShiftsAvailabilityIcon
