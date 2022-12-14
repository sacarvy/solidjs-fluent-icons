import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowSyncCheckmarkIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M11.41 3.64a.5.5 0 000-.71L9.3.8a.5.5 0 00-.7.7l1 1a7.5 7.5 0 00-4.08 13.5.5.5 0 00.6-.8A6.5 6.5 0 0111.4 3.66l.01-.02zM8.6 16.36l.01-.01c.41.09.83.14 1.27.15h-.01a6.48 6.48 0 004.74-1.9 6.5 6.5 0 00-.7-9.8.5.5 0 11.6-.8 7.5 7.5 0 01-4.07 13.5l.98.98a.5.5 0 11-.7.71l-2.12-2.12a.5.5 0 010-.7zm3.76-8.21c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1.5-1.5a.5.5 0 01.7-.7L9 10.79l2.65-2.64c.2-.2.5-.2.7 0zM5 10a5 5 0 1110 0 5 5 0 01-10 0zm5-4a4 4 0 100 8 4 4 0 000-8z" />
		</svg>
	)
}
export default ArrowSyncCheckmarkIcon
