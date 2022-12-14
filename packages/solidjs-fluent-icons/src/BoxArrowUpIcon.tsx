import { splitProps, ComponentProps, JSX } from "solid-js"

function BoxArrowUpIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.3 2.48a3.5 3.5 0 00-2.6 0l-5.76 2.3A1.5 1.5 0 002 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3c.44.17.9.26 1.38.25a5.5 5.5 0 01-.62-1.06 2.5 2.5 0 01-.39-.12l-5.76-2.3a.5.5 0 01-.31-.47V6.24l6.5 2.6v3.36c.25-.54.6-1.04 1-1.48V8.84l6.5-2.6V9.6c.36.18.7.4 1 .66V6.18a1.5 1.5 0 00-.94-1.4l-5.76-2.3zm-2.23.93a2.5 2.5 0 011.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54zm-2.7 1.08l6.16 2.46L10 7.96 3.85 5.5l2.53-1.01zm8.13 14.5a4.5 4.5 0 100-8.99 4.5 4.5 0 000 9zm.35-6.85l2 2a.5.5 0 11-.7.71L15 13.71v2.79a.5.5 0 01-1 0v-2.8l-1.15 1.15a.5.5 0 11-.7-.7l2-2a.5.5 0 01.35-.15.5.5 0 01.35.14z" />
		</svg>
	)
}
export default BoxArrowUpIcon
