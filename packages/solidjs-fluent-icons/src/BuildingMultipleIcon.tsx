import { splitProps, ComponentProps, JSX } from "solid-js"

function BuildingMultipleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 4c0-1.1.9-2 2-2h6a2 2 0 012 2v1h4a2 2 0 012 2v10a1 1 0 01-1 1H3a1 1 0 01-1-1V4zm10 13h2v-2h-2v2zm3 0h2V7a1 1 0 00-1-1h-6a1 1 0 00-1 1v10h2v-2a1 1 0 011-1h2a1 1 0 011 1v2zM11 4a1 1 0 00-1-1H4a1 1 0 00-1 1v13h5V7c0-1.1.9-2 2-2h1V4zm1 4.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-6.75.75a.75.75 0 100-1.5.75.75 0 000 1.5zM6 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm5.25 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zM6 14.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75-2.25a.75.75 0 100-1.5.75.75 0 000 1.5zM15.5 8.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-.75 3.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default BuildingMultipleIcon
