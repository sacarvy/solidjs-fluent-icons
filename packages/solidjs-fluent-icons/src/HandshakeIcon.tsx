import { splitProps, ComponentProps, JSX } from "solid-js"

function HandshakeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10.24 3.01a.5.5 0 00-.39.19l-.08.06A5.13 5.13 0 004.7 4.44a4.7 4.7 0 00-1.37 4.31l-.05.05-.78.75c-.64.61-.64 1.6 0 2.22.4.38.95.53 1.46.43.06.29.21.56.44.79.31.3.71.45 1.11.46.01.39.17.77.48 1.07.3.3.7.44 1.1.45.02.4.18.78.49 1.07.6.58 1.56.61 2.2.1l.43.42c.64.61 1.68.61 2.32 0 .3-.3.47-.68.48-1.07.4 0 .8-.16 1.1-.46.3-.3.47-.67.48-1.06.4-.01.78-.17 1.09-.46.24-.23.39-.52.45-.82.5.08 1.05-.06 1.44-.44.63-.61.63-1.6 0-2.22l-.72-.7.14-.54c.3-1.13.15-2.32-.42-3.34a4.8 4.8 0 00-4.2-2.43h-2.13zm2.46 3.72l2.4 2.31 1.75 1.68c.24.23.24.6 0 .84a.63.63 0 01-.87 0l-1.32-1.27a.52.52 0 00-.72 0h-.01c-.2.2-.2.51 0 .7l1.03 1c.24.22.24.6 0 .83a.63.63 0 01-.8.05.52.52 0 00-.67.05.48.48 0 00-.04.64c.18.24.16.57-.06.78a.63.63 0 01-.8.05.52.52 0 00-.68.04.48.48 0 00-.05.64c.2.24.18.58-.05.8a.64.64 0 01-.87 0l-.44-.42.16-.16c.64-.61.64-1.6 0-2.22-.3-.3-.7-.45-1.1-.46a1.54 1.54 0 00-.49-1.07c-.3-.3-.7-.44-1.1-.45a1.54 1.54 0 00-.48-1.07c-.4-.39-.95-.53-1.46-.43a1.55 1.55 0 00-.45-.8c-.35-.33-.83-.48-1.29-.45a3.74 3.74 0 011.13-3.2 4.06 4.06 0 013.29-1.1L7.25 5.11a1.7 1.7 0 00-.33 2.44c.6.76 1.7.9 2.48.33l1.58-1.15h1.72zm-4.86-.81l2.6-1.9h.53a2.26 2.26 0 01.15 0h1.24c1.4 0 2.69.74 3.34 1.92.44.8.56 1.72.33 2.6l-2.77-2.67a.5.5 0 00-.35-.14h-2.1a.5.5 0 00-.3.1l-1.7 1.25a.8.8 0 01-1.1-.15.7.7 0 01.13-1.01zm.45 8.6l.78-.75.01-.01a.63.63 0 01.86 0c.24.24.24.6 0 .84l-.78.75a.63.63 0 01-.86 0 .57.57 0 01-.01-.83zm.07-1.46v.01l-.78.75-.01.01a.63.63 0 01-.86 0 .57.57 0 010-.84l.78-.75a.63.63 0 01.86 0c.24.23.24.6.01.82zm-1.6-1.52L6 12.3v.01a.63.63 0 01-.86 0 .57.57 0 010-.84l.77-.75a.63.63 0 01.87 0c.24.23.24.6 0 .83zm-1.9-1.21l-.78.74a.63.63 0 01-.86 0 .57.57 0 010-.83L4 9.5a.63.63 0 01.86 0c.24.23.24.6 0 .84z" />
		</svg>
	)
}
export default HandshakeIcon
