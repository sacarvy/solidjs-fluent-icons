import { splitProps, ComponentProps, JSX } from "solid-js"

function TabShieldDismissIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v2.73c-.34-.2-.67-.46-1-.8V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h5.32a5.75 5.75 0 00.71 1H5.5A2.5 2.5 0 013 14.5v-9zm15.6 4.17c-1.22 0-2.32-.51-3.32-1.55a.39.39 0 00-.56 0 4.5 4.5 0 01-3.32 1.55.4.4 0 00-.4.41v2.75c.08 2.55 1.4 4.29 3.87 5.15.09.03.17.03.26 0 2.56-.89 3.87-2.71 3.87-5.4v-2.57a.4.4 0 00-.4-.34zm-4.96 1.44L15 12.47l1.35-1.36a.38.38 0 01.54.54L15.53 13l1.36 1.35a.38.38 0 01-.54.54L15 13.53l-1.35 1.36a.38.38 0 01-.54-.54L14.47 13l-1.36-1.36a.38.38 0 01.53-.53z" />
		</svg>
	)
}
export default TabShieldDismissIcon
