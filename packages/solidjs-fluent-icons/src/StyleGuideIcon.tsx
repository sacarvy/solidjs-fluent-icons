import { splitProps, ComponentProps, JSX } from "solid-js"

function StyleGuideIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.07 6a2 2 0 011.41-2.46l5.46-1.47a2 2 0 012.45 1.41l2.54 9.53a2 2 0 01-1.41 2.45l-5.46 1.47a2 2 0 01-2.45-1.41L5.07 5.99zm1.67-1.5a1 1 0 00-.7 1.23l2.53 9.53a1 1 0 001.23.7l5.46-1.47a1 1 0 00.7-1.22l-2.53-9.53a1 1 0 00-1.23-.7L6.74 4.5zM4 8.54L2.67 13.5a2 2 0 001.41 2.45l.08.02A3 3 0 014 15v-.19a1 1 0 01-.36-1.06L4 12.4V8.53zm1 1.09V15c0 1.1.9 2 2 2h.1a2.5 2.5 0 01-.33-.74l-.08-.3A1 1 0 016 15v-1.63L5 9.62zM8.25 7a.75.75 0 100-1.5.75.75 0 000 1.5z" />
		</svg>
	)
}
export default StyleGuideIcon
