import { splitProps, ComponentProps, JSX } from "solid-js"

function ConvertRangeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 2a2 2 0 00-2 2v2c0 1.1.9 2 2 2h8a2 2 0 002-2V4a2 2 0 00-2-2H5zM4 4a1 1 0 011-1h8a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 9.5a.5.5 0 000 1h4a.5.5 0 000-1H7zm4.88-3.5H5a2 2 0 00-2 2v4c0 1.1.9 2 2 2h8a2 2 0 002-2v-1.09a1.5 1.5 0 01-1 0V16a1 1 0 01-1 1H5a1 1 0 01-1-1v-4a1 1 0 011-1h6.09c.07-.2.19-.4.35-.56l.44-.44zM18 7.5a.5.5 0 00-1 0v2c0 .83-.67 1.5-1.5 1.5h-1.8l1.15-1.15a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L13.71 12h1.79A2.5 2.5 0 0018 9.5v-2z" />
		</svg>
	)
}
export default ConvertRangeIcon
