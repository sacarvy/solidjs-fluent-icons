import { splitProps, ComponentProps, JSX } from "solid-js"

function KeyboardLayoutOneHandedLeftIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M3.5 4C2.67 4 2 4.67 2 5.5v8c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-13zM3 5.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v8a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-8zM5.5 12a.5.5 0 000 1h3a.5.5 0 000-1h-3zm0-4.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.75 8a.75.75 0 100-1.5.75.75 0 000 1.5zM6 9.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.25.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default KeyboardLayoutOneHandedLeftIcon
