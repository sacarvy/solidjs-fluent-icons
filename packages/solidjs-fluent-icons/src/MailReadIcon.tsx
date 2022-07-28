import { splitProps, ComponentProps, JSX } from "solid-js"

function MailReadIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9.74 3.07a.5.5 0 01.52 0l6.77 4.06A2 2 0 0118 8.85v5.65a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V8.85a2 2 0 01.97-1.72l.21.36-.2-.36 6.76-4.06zM10 4.08L3.49 8 3.47 8 10 11.92 16.53 8h-.02L10 4.07zm7 4.8l-6.74 4.05a.5.5 0 01-.52 0L3 8.88v5.62c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V8.88z" />
		</svg>
	)
}
export default MailReadIcon
