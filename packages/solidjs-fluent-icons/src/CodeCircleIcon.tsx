import { splitProps, ComponentProps, JSX } from "solid-js"

function CodeCircleIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.96 6.2a.5.5 0 10-.92-.4l-3.5 8a.5.5 0 10.92.4l3.5-8zm-5.1 1.45c.19.2.19.5 0 .7L5.2 10l1.64 1.65a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2c.2-.2.5-.2.7 0zm6.29.7a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L14.79 10l-1.64-1.65zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" />
		</svg>
	)
}
export default CodeCircleIcon
