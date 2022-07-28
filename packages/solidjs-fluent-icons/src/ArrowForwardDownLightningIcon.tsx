import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowForwardDownLightningIcon(
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
			<path d="M16.3 7L13.6 4.32a.5.5 0 01.64-.77l.07.06 3.56 3.57.05.07.03.06.02.06v.03c.02.03.02.06.02.1v-.02.06l-.02.09-.02.06-.04.08-.05.07-3.55 3.55a.5.5 0 01-.77-.64l.06-.07L16.3 8H12C8.48 8 6.11 6.02 6 3.2V3a.5.5 0 011 0c0 2.27 1.8 3.9 4.74 4h4.56zM11 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.12-3a.5.5 0 00-.47.33l-.88 2.5A.5.5 0 005 14h.78l-.51 1.87a.5.5 0 00.9.4l2.25-3.5A.5.5 0 008 12h-.75l.28-.84a.5.5 0 00-.47-.66H5.88z" />
		</svg>
	)
}
export default ArrowForwardDownLightningIcon
