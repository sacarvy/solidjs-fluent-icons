import { splitProps, ComponentProps, JSX } from "solid-js"

function MicroscopeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7 2.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V3h.5c.28 0 .5.22.5.5v1.53A6.5 6.5 0 0113.96 17h2.54a.5.5 0 010 1h-13a.5.5 0 010-1h7A5.5 5.5 0 0011 6.02v5.48a.5.5 0 01-.5.5H10v.5a1.5 1.5 0 01-3 0V12h-.5a.5.5 0 01-.5-.5v-8c0-.28.22-.5.5-.5H7v-.5zM8 12v.5a.5.5 0 001 0V12H8zm-1-1h3V4H7v7zm-1.5 4a.5.5 0 000 1h6a.5.5 0 000-1h-6z" />
		</svg>
	)
}
export default MicroscopeIcon
