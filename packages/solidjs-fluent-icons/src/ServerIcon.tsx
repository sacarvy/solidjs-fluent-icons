import { splitProps, ComponentProps, JSX } from "solid-js"

function ServerIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM7 12.5c0-.28.22-.5.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zm.5 1.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM5 4.5A2.5 2.5 0 017.5 2h5A2.5 2.5 0 0115 4.5v11a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 015 15.5v-11zM7.5 3C6.67 3 6 3.67 6 4.5v11c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-11c0-.83-.67-1.5-1.5-1.5h-5z" />
		</svg>
	)
}
export default ServerIcon
