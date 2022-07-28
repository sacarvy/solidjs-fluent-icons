import { splitProps, ComponentProps, JSX } from "solid-js"

function ArrowCircleDownDoubleIcon(
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
			<path d="M9 12.2l-1.65 1.65a.5.5 0 01-.7 0L5 12.21a.5.5 0 11.7-.71l.8.8V6.5a.5.5 0 011 0v5.8l.8-.8a.5.5 0 11.7.7zm1 5.8a8 8 0 100-16 8 8 0 000 16zm7-8a7 7 0 11-14 0 7 7 0 0114 0zm-3.65 3.85L15 12.21a.5.5 0 10-.7-.71l-.8.8V6.5a.5.5 0 00-1 0v5.8l-.8-.8a.5.5 0 10-.7.7l1.65 1.65c.2.2.5.2.7 0z" />
		</svg>
	)
}
export default ArrowCircleDownDoubleIcon
