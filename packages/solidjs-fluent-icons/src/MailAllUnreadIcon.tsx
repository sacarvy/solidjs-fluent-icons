import { splitProps, ComponentProps, JSX } from "solid-js"

function MailAllUnreadIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-3.16-4H4.5A2.5 2.5 0 002 5.5v7A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5V7.66c-.31.15-.65.25-1 .3v4.54c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 013 12.5V6.96l5.75 2.97.08.04c.14.05.3.04.42-.04l4.1-2.12a3.5 3.5 0 01-1.06-.6L9 8.92 3 5.8v-.3C3 4.67 3.67 4 4.5 4h6.54c.05-.35.15-.69.3-1zM6.5 17a2.5 2.5 0 01-2-1h9a3.5 3.5 0 003.5-3.5v-5c.6.46 1 1.18 1 2v3a4.5 4.5 0 01-4.5 4.5h-7z" />
		</svg>
	)
}
export default MailAllUnreadIcon
