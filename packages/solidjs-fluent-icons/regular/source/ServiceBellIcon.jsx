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
			<path d="M10.5 8.5c.42 0 .84 0 1.27.16.41.15.87.45 1.31 1.12a.5.5 0 00.84-.56 3.66 3.66 0 00-1.81-1.5 4.51 4.51 0 00-1.59-.22h-.02a.5.5 0 000 1zM8 5v.79a7 7 0 00-5 6.71c0 .28.22.5.5.5h13a.5.5 0 00.5-.5 7 7 0 00-5-6.71V5a2 2 0 10-4 0zm2-1a1 1 0 011 1v.57a7.06 7.06 0 00-2 0V5a1 1 0 011-1zm0 2.5a6 6 0 015.98 5.5H4.02A6 6 0 0110 6.5zM3.5 14a1.5 1.5 0 000 3h13a1.5 1.5 0 000-3h-13zM3 15.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default ServiceBellIcon
