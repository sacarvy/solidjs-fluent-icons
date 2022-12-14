import { splitProps } from "solid-js"
function TabInprivateAccountIcon(props) {
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
			<path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.66c-.1-.32-.15-.65-.16-1H5.5A1.5 1.5 0 014 14.5v-9C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5v1.64c.36.11.7.28 1 .49V5.5A2.5 2.5 0 0014.5 3h-9zm8 7.5c0 .83.67 1.5 1.5 1.5h2a2.5 2.5 0 110-3h-2c-.83 0-1.5.67-1.5 1.5zm-1.32 4.7c.12-.14.26-.2.37-.2h6.32a1.78 1.78 0 00-.3-.47 1.5 1.5 0 00-1.12-.53h-4.9c-.46 0-.86.24-1.12.53-.26.29-.43.69-.43 1.09v.32c0 1.63 1.63 3.06 4 3.06 1.24 0 2.28-.4 2.99-1H15c-2.03 0-3-1.17-3-2.06v-.32c0-.13.06-.3.18-.43zm5.32-4.7c0 .17-.02.34-.05.5H15v-1h2.45c.03.16.05.33.05.5zm1.26 6.5H15v-1h4c0 .35-.1.68-.24 1z" />
		</svg>
	)
}
export default TabInprivateAccountIcon
