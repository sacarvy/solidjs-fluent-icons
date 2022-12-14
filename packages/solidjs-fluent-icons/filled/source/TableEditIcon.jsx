import { splitProps } from "solid-js"
function TableEditIcon(props) {
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
			<path d="M18.45 13.2a1.87 1.87 0 00-2.64-2.65l-4.83 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83zM15.1 9.83c.53-.53 1.21-.8 1.9-.84V8h-4v3.94l2.1-2.1zm-4.83 4.83L11.94 13H8v4h1.22l.21-.85a3.2 3.2 0 01.84-1.48zM12 12H8V8h4v4zm-5 0V8H3v4h4zm-4 1h4v4H5.5A2.5 2.5 0 013 14.5V13zm10-6h4V5.5A2.5 2.5 0 0014.5 3H13v4zm-1-4v4H8V3h4zM7 3v4H3V5.5A2.5 2.5 0 015.5 3H7z" />
		</svg>
	)
}
export default TableEditIcon
