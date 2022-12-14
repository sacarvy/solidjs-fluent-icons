import { splitProps, ComponentProps, JSX } from "solid-js"

function TargetIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 11.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-4a4 4 0 100 8 4 4 0 000-8zm-8 4a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z" />
		</svg>
	)
}
export default TargetIcon
