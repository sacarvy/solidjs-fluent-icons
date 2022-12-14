import { splitProps, ComponentProps, JSX } from "solid-js"

function BadgeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M16 6a2 2 0 100-4 2 2 0 000 4zm1 9V6.83A3 3 0 0116 7v8a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h8a3 3 0 01.17-1H5a2 2 0 00-2 2v10c0 1.1.9 2 2 2h10a2 2 0 002-2z" />
		</svg>
	)
}
export default BadgeIcon
