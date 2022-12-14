import { splitProps } from "solid-js"
function ServiceBellIcon(props) {
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
			<path d="M8 5a2 2 0 114 0v.79a7 7 0 015 6.71.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5 7 7 0 015-6.71V5zm2.5 3.5c.42 0 .84 0 1.27.16.41.15.87.45 1.31 1.12a.5.5 0 00.84-.56 3.66 3.66 0 00-1.81-1.5 4.51 4.51 0 00-1.59-.22h-.02a.5.5 0 000 1zm-7 5.5a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13z" />
		</svg>
	)
}
export default ServiceBellIcon
