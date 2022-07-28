import { splitProps, ComponentProps, JSX } from "solid-js"

function TextContinuousIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 5.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 9c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm1.35-6.35a.5.5 0 10-.7.7L3.79 10l-1.14 1.15a.5.5 0 00.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5zM7.5 8h10a.5.5 0 010 1h-10a.5.5 0 010-1zm0 3a.5.5 0 000 1h10a.5.5 0 000-1h-10z" />
		</svg>
	)
}
export default TextContinuousIcon
