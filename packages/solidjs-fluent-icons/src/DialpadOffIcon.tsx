import { splitProps, ComponentProps, JSX } from "solid-js"

function DialpadOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l4.2 4.22A1 1 0 005 8a1 1 0 101.93-.36l3.43 3.43a1 1 0 10.57.57l6.22 6.21a.5.5 0 00.7-.7l-15-15zM15 12a1 1 0 01-.23.64l-1.41-1.4A1 1 0 0115 12zm-4-4a1 1 0 01-.23.64l-1.41-1.4A1 1 0 0111 8zM7 4a1 1 0 01-.23.64l-1.41-1.4A1 1 0 017 4zm0 8a1 1 0 11-2 0 1 1 0 012 0zm3-7a1 1 0 100-2 1 1 0 000 2zm1 11a1 1 0 11-2 0 1 1 0 012 0zm3-11a1 1 0 100-2 1 1 0 000 2zm1 3a1 1 0 11-2 0 1 1 0 012 0z" />
		</svg>
	)
}
export default DialpadOffIcon
