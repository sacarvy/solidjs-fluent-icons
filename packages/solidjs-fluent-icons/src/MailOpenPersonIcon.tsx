import { splitProps, ComponentProps, JSX } from "solid-js"

function MailOpenPersonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 3.08L3.49 7 3.47 7 10 10.92 16.53 7 10 3.08zM9.98 12a.5.5 0 01-.24-.07L3 7.88v5.62c0 .83.67 1.5 1.5 1.5h7c-.22.3-.38.63-.45 1H4.5A2.5 2.5 0 012 13.5V7.85a2 2 0 01.97-1.72l6.76-4.05a.5.5 0 01.53 0l6.93 4.15a.9.9 0 010 1.54l-2.1 1.26a3 3 0 00-2.02 1.21l-2.81 1.69a.5.5 0 01-.28.07zm7.52 0a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default MailOpenPersonIcon
