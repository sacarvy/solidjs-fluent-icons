import { splitProps } from "solid-js"
function ArrowForwardDownLightningIcon(props) {
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
			<path d="M15.69 7l-2.26-2.26a.75.75 0 01.98-1.13l.08.07 3.54 3.54.07.08.04.06.05.1.03.08.02.07v.06l.01.1v.06l-.02.09-.03.1-.05.1-.03.05a.75.75 0 01-.09.11l-3.54 3.54a.75.75 0 01-1.13-.98l.07-.08L15.7 8.5H12c-3.65 0-6.13-2.08-6.25-5.04v-.21a.75.75 0 011.5 0c0 2.13 1.7 3.66 4.5 3.75h3.94zM11 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.12-3a.5.5 0 00-.47.33l-.88 2.5A.5.5 0 005 14h.78l-.51 1.87a.5.5 0 00.9.4l2.25-3.5A.5.5 0 008 12h-.75l.28-.84a.5.5 0 00-.47-.66H5.88z" />
		</svg>
	)
}
export default ArrowForwardDownLightningIcon
