import { splitProps, ComponentProps, JSX } from "solid-js"

function PersonLockIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5 6a4 4 0 118 0 4 4 0 01-8 0zm4-3a3 3 0 100 6 3 3 0 000-6zM2 13a2 2 0 012-2h8.67a3 3 0 00-.17 1H4a1 1 0 00-1 1c0 1.3.62 2.28 1.67 2.95A8.16 8.16 0 009 17c.7 0 1.38-.06 2-.18v1.02c-.64.1-1.31.16-2 .16a9.14 9.14 0 01-4.87-1.2A4.35 4.35 0 012 13zm11.5 0v-1a2 2 0 114 0v1h.5a1 1 0 011 1v4a1 1 0 01-1 1h-5a1 1 0 01-1-1v-4a1 1 0 011-1h.5zm1-1v1h2v-1a1 1 0 10-2 0zm1.75 4a.75.75 0 10-1.5 0 .75.75 0 001.5 0z" />
		</svg>
	)
}
export default PersonLockIcon
