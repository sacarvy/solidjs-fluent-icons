import { splitProps, ComponentProps, JSX } from "solid-js"

function ScanCameraIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 6a3 3 0 013-3h1.5a.5.5 0 010 1H6a2 2 0 00-2 2v1.5a.5.5 0 01-1 0V6zm9-2.5c0-.28.22-.5.5-.5H14a3 3 0 013 3v1.5a.5.5 0 01-1 0V6a2 2 0 00-2-2h-1.5a.5.5 0 01-.5-.5zM3.5 12c.28 0 .5.22.5.5V14c0 1.1.9 2 2 2h1.5a.5.5 0 010 1H6a3 3 0 01-3-3v-1.5c0-.28.22-.5.5-.5zm13 0c.28 0 .5.22.5.5V14a3 3 0 01-3 3h-1.5a.5.5 0 010-1H14a2 2 0 002-2v-1.5c0-.28.22-.5.5-.5zM10 11a1 1 0 100-2 1 1 0 000 2zm-4 1V9a1 1 0 011-1h1l.7-1.05a1 1 0 01.84-.45h.92a1 1 0 01.84.45L12 8h1a1 1 0 011 1v3a1 1 0 01-1 1H7a1 1 0 01-1-1zm6-2a2 2 0 10-4 0 2 2 0 004 0z" />
		</svg>
	)
}
export default ScanCameraIcon
