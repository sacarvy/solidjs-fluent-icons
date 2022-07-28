import { splitProps, ComponentProps, JSX } from "solid-js"

function WindowInprivateAccountIcon(
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
			<path d="M5.5 3A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h4.66c-.1-.32-.15-.65-.16-1H5.5A1.5 1.5 0 014 14.5V7h13V5.5A2.5 2.5 0 0014.5 3h-9zM16 5.5V6H4v-.5C4 4.67 4.67 4 5.5 4h9c.83 0 1.5.67 1.5 1.5zM15 12a1.5 1.5 0 010-3h2a2.5 2.5 0 100 3h-2zm-2.45 3c-.11 0-.25.06-.37.2a.68.68 0 00-.18.42v.32c0 .89.97 2.06 3 2.06h2.99c-.71.6-1.75 1-2.99 1-2.37 0-4-1.43-4-3.06v-.32c0-.4.17-.8.43-1.1.27-.28.66-.52 1.12-.52h4.9c.46 0 .86.24 1.12.53.12.14.22.3.3.47h-6.32zm4.95-4.5c0 .17-.02.34-.05.5H15v-1h2.45c.03.16.05.33.05.5zM15 17h3.76c.15-.32.23-.65.24-1h-4v1z" />
		</svg>
	)
}
export default WindowInprivateAccountIcon
