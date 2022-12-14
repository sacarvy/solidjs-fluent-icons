import { splitProps, ComponentProps, JSX } from "solid-js"

function TextSuperscriptIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M15.58 3c-.46 0-.83.42-.83.86a.5.5 0 01-1 0 1.87 1.87 0 013.42-1.04c.36.55.37 1.27-.04 1.98-.21.36-.5.63-.79.86l-.42.3-.06.05-.34.24c-.32.24-.55.47-.67.75h2.1a.5.5 0 110 1H14.3h-.03-.02a.5.5 0 01-.5-.5c0-1.04.6-1.62 1.17-2.05l.36-.26.06-.04.38-.28c.24-.19.42-.37.55-.58.25-.43.19-.73.07-.92a.89.89 0 00-.76-.37zM12.8 4.22c.09.35.3.66.58.86L9.16 10l4.43 5.17a.5.5 0 11-.76.66L8.5 10.77l-4.34 5.06a.5.5 0 01-.75-.66L7.84 10 3.41 4.83a.5.5 0 11.75-.66L8.5 9.23l4.3-5z" />
		</svg>
	)
}
export default TextSuperscriptIcon
