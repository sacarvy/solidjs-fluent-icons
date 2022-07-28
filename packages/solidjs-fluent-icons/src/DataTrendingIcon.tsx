import { splitProps, ComponentProps, JSX } from "solid-js"

function DataTrendingIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 16.5a.5.5 0 01-.5.5h-12A1.5 1.5 0 013 15.5v-12a.5.5 0 011 0v12c0 .28.22.5.5.5h12c.28 0 .5.22.5.5zm-5-11c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4a.5.5 0 01-1 0V6.7l-4.65 4.65a.5.5 0 01-.7 0L9 9.71l-3.15 3.14a.5.5 0 01-.7-.7l3.5-3.5a.5.5 0 01.7 0L11 10.29 15.3 6h-2.8a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default DataTrendingIcon
