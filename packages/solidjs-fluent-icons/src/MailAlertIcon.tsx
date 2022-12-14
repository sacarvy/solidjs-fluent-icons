import { splitProps, ComponentProps, JSX } from "solid-js"

function MailAlertIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.5 4a3 3 0 016 0v2l1.32 1.12a.5.5 0 01-.33.88H10.5a.5.5 0 01-.32-.88L11.5 6V4zm3 6a1.5 1.5 0 01-1.42-1h2.83c-.2.58-.76 1-1.41 1zm-10-5h6V4h-6A2.5 2.5 0 002 6.5v8A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5V9h-1v5.5c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l2.62-1.54a2.5 2.5 0 01-.62-.8L10 10.93 3 6.8v-.3C3 5.67 3.67 5 4.5 5z" />
		</svg>
	)
}
export default MailAlertIcon
