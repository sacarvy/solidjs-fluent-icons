import { splitProps, ComponentProps, JSX } from "solid-js"

function MoneyHandIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4.5 2C3.67 2 3 2.67 3 3.5v13c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V15a.5.5 0 00-.5-.5c-.41 0-.68-.1-.86-.24a1.3 1.3 0 01-.42-.62A6.69 6.69 0 0111 11.5a.5.5 0 00-.15-.35l-.28-.3-1.22-1.2c-.46-.47-.6-.78-.63-.96-.02-.14.03-.23.13-.33.21-.2.36-.34.54-.39.1-.02.33-.04.76.38l3 3a.5.5 0 00.7-.7L13 9.79V6.71l2.56 2.56c.28.28.44.66.44 1.06v7.17a.5.5 0 001 0v-7.17c0-.66-.26-1.3-.73-1.77L13 5.3V3.5c0-.83-.67-1.5-1.5-1.5h-7zM12 5.5v3.3l-1.15-1.15c-.57-.58-1.15-.78-1.7-.65-.11.03-.22.07-.31.12A3 3 0 1010 12.23c.01.58.07 1.21.27 1.75.15.41.38.8.76 1.08h.01c-.6.2-1.05.77-1.05 1.44v.5H6v-.5c0-.83-.67-1.5-1.5-1.5H4V5h.5C5.33 5 6 4.33 6 3.5V3h4v.5c0 .83.67 1.5 1.5 1.5h.5v.5zm0 11a.5.5 0 01-.5.5H11v-.5c0-.28.22-.5.5-.5h.5v.5zM6 10a2 2 0 011.87-2c-.12.23-.18.51-.13.84.07.48.37.98.9 1.51l.91.91A2 2 0 016 10zM5 3v.5a.5.5 0 01-.5.5H4v-.5c0-.28.22-.5.5-.5H5zM4 16h.5c.28 0 .5.22.5.5v.5h-.5a.5.5 0 01-.5-.5V16zm8-12h-.5a.5.5 0 01-.5-.5V3h.5c.28 0 .5.22.5.5V4z" />
		</svg>
	)
}
export default MoneyHandIcon
