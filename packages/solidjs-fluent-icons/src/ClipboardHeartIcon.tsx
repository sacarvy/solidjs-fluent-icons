import { splitProps, ComponentProps, JSX } from "solid-js"

function ClipboardHeartIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9c-.34.02-.67.07-1 .18V4.5a.5.5 0 00-.5-.5h-1.59c-.2.58-.76 1-1.41 1h-3a1.5 1.5 0 01-1.41-1H5.5a.5.5 0 00-.5.5v12c0 .28.22.5.5.5h5.05l1 1H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm1.33 7.83a2.85 2.85 0 014.04 0l.13.14.14-.14a2.85 2.85 0 014.03 4.04l-3.81 3.81a.5.5 0 01-.71 0l-3.82-3.81a2.85 2.85 0 010-4.04z" />
		</svg>
	)
}
export default ClipboardHeartIcon
