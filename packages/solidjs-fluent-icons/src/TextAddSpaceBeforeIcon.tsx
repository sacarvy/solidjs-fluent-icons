import { splitProps, ComponentProps, JSX } from "solid-js"

function TextAddSpaceBeforeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.15 5.85a.5.5 0 11.7-.7L10 6.29l1.15-1.14a.5.5 0 01.7.7l-1.5 1.5a.5.5 0 01-.7 0l-1.5-1.5zM3 10.5c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5zm0 4c0-.28.22-.5.5-.5h13a.5.5 0 010 1h-13a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default TextAddSpaceBeforeIcon
