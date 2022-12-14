import { splitProps, ComponentProps, JSX } from "solid-js"

function LocationArrowRightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
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
			<path d="M25.12 16.88a1.25 1.25 0 011.76-1.76l5 5c.5.48.5 1.28 0 1.76l-5 5a1.25 1.25 0 01-1.76-1.76l2.86-2.87H17a1.25 1.25 0 110-2.5h10.98l-2.86-2.87zM37 32L26.91 42.7a4 4 0 01-5.82 0L11 32h.04l-.02-.02-.02-.03A17.05 17.05 0 017 21a17 17 0 1130 10.95l-.02.03-.02.02H37zm-1.94-1.62a14.5 14.5 0 10-22.11 0l.3.36L22.91 41c.59.63 1.59.63 2.18 0l9.66-10.25.3-.36z" />
		</svg>
	)
}
export default LocationArrowRightIcon
