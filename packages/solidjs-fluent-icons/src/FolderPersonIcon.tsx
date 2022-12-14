import { splitProps, ComponentProps, JSX } from "solid-js"

function FolderPersonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.93 3.21A1.5 1.5 0 007.17 3H4.34A2.5 2.5 0 002 5.5v9.16A2.5 2.5 0 004.5 17h6.54a3.3 3.3 0 01.01-1H4.36A1.5 1.5 0 013 14.5v-7H7.22c.36-.04.69-.2.94-.47L9.62 5.5h6.02A1.5 1.5 0 0117 7v2.4c.4.23.74.56 1 .94v-3.5l-.02-.17A2.5 2.5 0 0015.5 4.5H9.67l-1.6-1.2-.14-.09zM4.5 4h2.75a.5.5 0 01.22.1l1.22.92-1.26 1.32-.06.06a.5.5 0 01-.3.1H3V5.36A1.5 1.5 0 014.5 4zm13 8a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default FolderPersonIcon
