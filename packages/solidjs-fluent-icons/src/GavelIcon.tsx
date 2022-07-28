import { splitProps, ComponentProps, JSX } from "solid-js"

function GavelIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.44 5.28a1.5 1.5 0 00.23 2.31l1.76 1.18-5.85 5.86a1.98 1.98 0 102.8 2.8l5.85-5.86 1.18 1.77c.53.78 1.64.89 2.3.22l2.85-2.84a1.5 1.5 0 00-.19-2.28l-3.31-2.39a.5.5 0 01-.11-.1l-2.4-3.32a1.5 1.5 0 00-2.27-.19L6.44 5.28zm4.22 5.44l-6 6a.98.98 0 01-1.37-1.39l5.99-5.99.74.5c.06.04.1.08.14.14l.5.74zM7.22 6.76a.5.5 0 01-.07-.77l2.84-2.84a.5.5 0 01.76.06l.57.79-3.3 3.3-.8-.54zm1.65 1.1l3.04-3.04 1.22 1.7c.1.14.21.25.34.35l1.71 1.22-3.04 3.04-1.15-1.71a1.5 1.5 0 00-.41-.41L8.87 7.86zM16 8.7l.79.56a.5.5 0 01.06.76l-2.84 2.84a.5.5 0 01-.77-.07l-.53-.8 3.3-3.3zm-4 7.81c0-.28.22-.5.5-.5h3a.5.5 0 110 1h2a.5.5 0 110 1h-7a.5.5 0 110-1h2a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default GavelIcon
