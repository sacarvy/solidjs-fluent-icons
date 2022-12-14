import { splitProps, ComponentProps, JSX } from "solid-js"

function TableSettingsIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.5 3A2.5 2.5 0 0117 5.5v4.1c-.32-.16-.65-.3-1-.4V8h-3v1.2c-.35.1-.68.24-1 .4V8H8v4h1.6c-.16.32-.3.65-.4 1H8v3h1.2c.1.35.24.68.4 1H5.5A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zM4 13v1.5c0 .78.6 1.42 1.36 1.5H7v-3H4zm4-6h4V4H8v3zm6.5-3H13v3h3V5.5c0-.78-.6-1.42-1.36-1.5h-.14zM4 5.5V7h3V4H5.5c-.78 0-1.42.6-1.5 1.36v.14zM7 12V8H4v4h3zm5.06-.56a2 2 0 01-1.43 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.16-.55a2 2 0 011.44-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.15.55zm2.44 4.06a1 1 0 110-2 1 1 0 010 2z" />
		</svg>
	)
}
export default TableSettingsIcon
