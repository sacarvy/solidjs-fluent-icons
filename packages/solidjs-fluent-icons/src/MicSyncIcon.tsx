import { splitProps, ComponentProps, JSX } from "solid-js"

function MicSyncIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9 13h.2c.12-.4.27-.76.46-1.11A2 2 0 017 10V5a2 2 0 114 0v5c0 .1 0 .18-.02.27.31-.26.66-.48 1.02-.67V5a3 3 0 10-6 0v5a3 3 0 003 3zm-4.5-3A4.5 4.5 0 009 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0zm5.5 4.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.97 1.97 0 00-.94-.25 2 2 0 00-1.44.59.5.5 0 01-.71-.71 3 3 0 013.62-.48V12c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z" />
		</svg>
	)
}
export default MicSyncIcon
