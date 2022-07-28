import { splitProps, ComponentProps, JSX } from "solid-js"

function MailEditIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M15.5 3A2.5 2.5 0 0118 5.5v3.63c-.32-.1-.66-.14-1-.13V6.96l-6.75 3.97a.5.5 0 01-.42.04l-.08-.04L3 6.96v6.54c0 .83.67 1.5 1.5 1.5h5.48c-.22.3-.4.64-.5 1H4.5A2.5 2.5 0 012 13.5v-8A2.5 2.5 0 014.5 3h11zm0 1h-11C3.67 4 3 4.67 3 5.5v.3l7 4.12 7-4.12v-.3c0-.83-.67-1.5-1.5-1.5zm-4.52 11.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default MailEditIcon
