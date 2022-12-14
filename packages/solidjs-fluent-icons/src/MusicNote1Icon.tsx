import { splitProps, ComponentProps, JSX } from "solid-js"

function MusicNote1Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.15 2.02a.5.5 0 00-.65.48v9.9A3.24 3.24 0 004 14.75a3.25 3.25 0 106.5-.25V7.18l5.85 1.8A.5.5 0 0017 8.5V5.98a2.5 2.5 0 00-1.76-2.4l-5.1-1.56zM16 7.82l-5.5-1.69V3.18l4.44 1.36c.63.2 1.06.78 1.06 1.44v1.84zM5 14.75a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" />
		</svg>
	)
}
export default MusicNote1Icon
