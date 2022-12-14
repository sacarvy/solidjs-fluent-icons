import { splitProps, ComponentProps, JSX } from "solid-js"

function UsbPlugIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 2h5c.28 0 .5.22.5.5V6h.08C14.14 6 15 6.85 15 7.91v5.18c0 1.06-.86 1.91-1.92 1.91H12v2.5a.5.5 0 01-1 0V15H9v2.5a.5.5 0 01-1 0V15H6.92A1.92 1.92 0 015 13.09V7.9C5 6.85 5.86 6 6.92 6H7V2.5c0-.28.22-.5.5-.5zm5.58 12c.51 0 .92-.41.92-.91V7.9c0-.5-.4-.91-.92-.91H6.92a.92.92 0 00-.92.91v5.18c0 .5.4.91.92.91h6.16zM12 6V3H8v3h4z" />
		</svg>
	)
}
export default UsbPlugIcon
