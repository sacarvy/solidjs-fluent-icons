import { splitProps, ComponentProps, JSX } from "solid-js"

function SidebarSearchRtlIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v7c0-1.07-.37-2.06-1-2.83V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5v9c0 .83.67 1.5 1.5 1.5h4.17c.77.63 1.76 1 2.83 1h-7A2.5 2.5 0 013 14.5v-9zm3 1a.5.5 0 011 0v7a.5.5 0 01-1 0v-7zm10 6c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 01-.7.7L14.6 15.3a3.5 3.5 0 111.4-2.8zm-1 0a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" />
		</svg>
	)
}
export default SidebarSearchRtlIcon
