import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowMinimizeVerticalIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M9.5 1c.28 0 .5.22.5.5v3.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 11.7-.7L9 5.29V1.5c0-.28.22-.5.5-.5zm-6 8.5c0-.28.22-.5.5-.5h11a.5.5 0 010 1H4a.5.5 0 01-.5-.5zm6.5 4.2v3.8a.5.5 0 01-1 0v-3.8l-1.15 1.15a.5.5 0 01-.7-.7l2-2c.2-.2.5-.2.7 0l2 2a.5.5 0 01-.7.7L10 13.71z" />
		</svg>
	)
}
export default ArrowMinimizeVerticalIcon
