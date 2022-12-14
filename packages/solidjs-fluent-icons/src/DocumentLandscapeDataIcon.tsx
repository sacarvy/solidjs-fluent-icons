import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentLandscapeDataIcon(
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
			<path d="M4.5 4A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h11a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0015.5 4h-11zM3 6.5C3 5.67 3.67 5 4.5 5h11c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 13.5v-7zM6 10c-.83 0-1.5.67-1.5 1.5v1a1.5 1.5 0 003 0v-1c0-.83-.67-1.5-1.5-1.5zm-.5 1.5a.5.5 0 011 0v1a.5.5 0 01-1 0v-1zm3-4a1.5 1.5 0 113 0v5a1.5 1.5 0 01-3 0v-5zM10 7a.5.5 0 00-.5.5v5a.5.5 0 001 0v-5A.5.5 0 0010 7zm4 1c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 003 0v-3c0-.83-.67-1.5-1.5-1.5zm-.5 1.5a.5.5 0 011 0v3a.5.5 0 01-1 0v-3z" />
		</svg>
	)
}
export default DocumentLandscapeDataIcon
