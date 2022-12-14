import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowSyncIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.41 3.64a.5.5 0 000-.71L9.3.8a.5.5 0 00-.7.7l1 1a7.5 7.5 0 00-4.08 13.5.5.5 0 00.6-.8A6.5 6.5 0 0110.14 3.5L8.59 5.04a.5.5 0 00.7.7l2.12-2.11zM8.6 16.36a.5.5 0 000 .71l2.12 2.12a.5.5 0 00.7-.7l-1-1a7.5 7.5 0 004.07-13.5.5.5 0 10-.59.8A6.5 6.5 0 019.86 16.5l1.55-1.55a.5.5 0 10-.7-.7l-2.12 2.11z" />
		</svg>
	)
}
export default ArrowSyncIcon
