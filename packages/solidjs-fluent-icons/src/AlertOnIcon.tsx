import { splitProps, ComponentProps, JSX } from "solid-js"

function AlertOnIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M1.8 2.1a.5.5 0 10-.6.8l2 1.5a.5.5 0 10.6-.8l-2-1.5zM1 7a.5.5 0 000 1h1.5a.5.5 0 000-1H1zm9-5a5.92 5.92 0 015.98 5.35l.02.23V11.4l.92 2.22a1 1 0 01.06.17l.01.08.01.13a1 1 0 01-.75.97l-.11.02L16 15h-3.5v.16a2.5 2.5 0 01-5 0V15H4a1 1 0 01-.26-.03l-.13-.04a1 1 0 01-.6-1.05l.02-.13.05-.13L4 11.4V7.57A5.9 5.9 0 0110 2zm1.5 13h-3v.14a1.5 1.5 0 001.36 1.35l.14.01c.78 0 1.42-.6 1.5-1.36V15zM10 3a4.9 4.9 0 00-4.98 4.38L5 7.6V11.5l-.04.2L4 14h12l-.96-2.3-.04-.2V7.61A4.9 4.9 0 0010 3zm8.9-.8a.5.5 0 00-.7-.1l-2 1.5a.5.5 0 00.6.8l2-1.5a.5.5 0 00.1-.7zm.6 5.3A.5.5 0 0019 7h-1.5a.5.5 0 000 1H19a.5.5 0 00.5-.5z" />
		</svg>
	)
}
export default AlertOnIcon
