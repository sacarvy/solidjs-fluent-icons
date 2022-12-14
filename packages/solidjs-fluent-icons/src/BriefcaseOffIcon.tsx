import { splitProps, ComponentProps, JSX } from "solid-js"

function BriefcaseOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L5.3 6.01A2.5 2.5 0 003 8.5v5A2.5 2.5 0 005.5 16h9c.24 0 .47-.03.7-.1l1.95 1.95a.5.5 0 00.7-.7l-1.73-1.74-.72-.71L2.85 2.15zM14.3 15H5.5A1.5 1.5 0 014 13.5v-5C4 7.67 4.67 7 5.5 7h.8l8 8zM16 13.5c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-5A2.5 2.5 0 0014.5 6H13V3.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v1.38l1 1V4h4v2H8.12l1 1h5.38c.83 0 1.5.67 1.5 1.5v5z" />
		</svg>
	)
}
export default BriefcaseOffIcon
