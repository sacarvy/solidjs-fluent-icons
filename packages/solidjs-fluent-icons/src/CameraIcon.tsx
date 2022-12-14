import { splitProps, ComponentProps, JSX } from "solid-js"

function CameraIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 6a4 4 0 100 8 4 4 0 000-8zm-3 4a3 3 0 116 0 3 3 0 01-6 0zm1.12-8a1.5 1.5 0 00-1.34.83L6.2 4H4.5A2.5 2.5 0 002 6.5v8A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-8A2.5 2.5 0 0015.5 4h-1.69l-.58-1.17A1.5 1.5 0 0011.89 2H8.12zm-.44 1.28A.5.5 0 018.12 3h3.77c.19 0 .36.1.45.28l.72 1.44a.5.5 0 00.45.28h2c.82 0 1.5.67 1.5 1.5v8c0 .83-.68 1.5-1.5 1.5h-11A1.5 1.5 0 013 14.5v-8C3 5.67 3.67 5 4.5 5h2a.5.5 0 00.44-.28l.73-1.44z" />
		</svg>
	)
}
export default CameraIcon
