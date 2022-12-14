import { splitProps } from "solid-js"
function TableSettingsIcon(props) {
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
			<path d="M17 9.6a5.48 5.48 0 00-4-.4V8h4v1.6zM9.2 13a5.5 5.5 0 00.4 4H8v-4h1.2zM12 9.6A5.52 5.52 0 009.6 12H8V8h4v1.6zM7 8v4H3V8h4zm0 5H3v1.5A2.5 2.5 0 005.5 17H7v-4zm10-6h-4V3h1.5A2.5 2.5 0 0117 5.5V7zm-5 0V3H8v4h4zM7 7V3H5.5A2.5 2.5 0 003 5.5V7h4zm5.06 4.44a2 2 0 01-1.43 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default TableSettingsIcon
