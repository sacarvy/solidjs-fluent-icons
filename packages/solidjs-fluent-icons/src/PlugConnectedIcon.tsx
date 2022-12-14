import { splitProps, ComponentProps, JSX } from "solid-js"

function PlugConnectedIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17.85 2.85a.5.5 0 00-.7-.7L14.48 4.8a4.04 4.04 0 00-5.33.34l-.3.3a1.49 1.49 0 000 2.1l3.6 3.6c.58.59 1.52.59 2.1 0l.3-.3a4.04 4.04 0 00.34-5.33l2.66-2.67zm-4 7.6c-.2.19-.5.19-.7 0l-3.6-3.6c-.19-.2-.19-.5 0-.7l.3-.3a3.04 3.04 0 014.3 4.3l-.3.3zm-6.3-1.6a1.49 1.49 0 00-2.1 0l-.3.3a4.04 4.04 0 00-.34 5.33l-2.66 2.67a.5.5 0 00.7.7l2.67-2.66a4.04 4.04 0 005.33-.34l.3-.3c.59-.58.59-1.52 0-2.1l-3.6-3.6zm-1.4.7c.2-.19.5-.19.7 0l3.6 3.6c.19.2.19.5 0 .7l-.3.3a3.04 3.04 0 11-4.3-4.3l.3-.3z" />
		</svg>
	)
}
export default PlugConnectedIcon
