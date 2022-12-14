import { splitProps, ComponentProps, JSX } from "solid-js"

function BuildingFactoryIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.44 2a1.5 1.5 0 00-1.5 1.4l-.87 13a1.5 1.5 0 001.5 1.6h2.86a1.5 1.5 0 001.5-1.6l-.87-13A1.5 1.5 0 005.56 2H4.44zm-.5 1.47a.5.5 0 01.5-.47h1.12c.27 0 .49.2.5.47l.87 13a.5.5 0 01-.5.53H3.57a.5.5 0 01-.5-.53l.87-13zM16.5 18H8.43c.22-.3.38-.63.45-1H10v-4a1 1 0 011-1h4a1 1 0 011 1v4h.5a.5.5 0 00.5-.5V6.62l-4.17 3.75A.5.5 0 0112 10V6.62L8.49 9.78 8.4 8.51l3.76-3.38a.5.5 0 01.84.37v3.38l4.16-3.75a.5.5 0 01.84.37v11c0 .83-.67 1.5-1.5 1.5zM11 17h4v-4h-4v4z" />
		</svg>
	)
}
export default BuildingFactoryIcon
