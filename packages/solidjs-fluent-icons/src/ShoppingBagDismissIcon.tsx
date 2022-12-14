import { splitProps, ComponentProps, JSX } from "solid-js"

function ShoppingBagDismissIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 2.5a2.5 2.5 0 00-4 2V6H5a1 1 0 00-1 1v8a3 3 0 003 3h3.26a5.5 5.5 0 01-.66-1H7a2 2 0 01-2-2V7h6v3.26c.3-.26.64-.48 1-.66V7h3v2.02c.34.03.68.1 1 .19V7a1 1 0 00-1-1h-1V4.5a2.5 2.5 0 00-4-2zm-3 2a1.5 1.5 0 113 0V6H7V4.5zm3.67-1.25A1.5 1.5 0 0113 4.5V6h-2V4.5c0-.45-.12-.88-.33-1.25zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" />
		</svg>
	)
}
export default ShoppingBagDismissIcon
