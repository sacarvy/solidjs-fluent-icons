import { splitProps, ComponentProps, JSX } from "solid-js"

function MailOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L3.5 4.21A2.5 2.5 0 002 6.5v8A2.5 2.5 0 004.5 17h11c.24 0 .47-.03.7-.1l.95.95a.5.5 0 00.7-.7l-15-15zM15.3 16H4.5A1.5 1.5 0 013 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l.61-.36L15.3 16zm-5.16-5.16l-.13.08L3 6.8v-.3c0-.76.57-1.4 1.3-1.49l5.83 5.83zM17 6.8l-5.09 3 .73.72L17 7.96v6.54c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0015.5 4H6.12l1 1h8.38c.83 0 1.5.67 1.5 1.5v.3z" />
		</svg>
	)
}
export default MailOffIcon
