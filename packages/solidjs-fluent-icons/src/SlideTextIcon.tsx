import { splitProps, ComponentProps, JSX } from "solid-js"

function SlideTextIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 7a.5.5 0 000 1h4a.5.5 0 000-1h-4zm0 2.5a.5.5 0 000 1h7a.5.5 0 000-1h-7zm-.5 3c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zM3 6.5C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 13.5v-7z" />
		</svg>
	)
}
export default SlideTextIcon
