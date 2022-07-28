import { splitProps, ComponentProps, JSX } from "solid-js"

function EarthIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7h-.25c.11.23.25.5.37.83.28.74.52 1.82.08 2.76-.4.86-1.1 1.08-1.63 1.22l-.1.02c-.5.13-.75.2-.93.46-.17.26-.12.58.04 1.12l.04.12c.07.21.14.46.18.69.05.28.06.63-.11.97-.18.34-.41.57-.69.72-.26.14-.53.2-.75.24l-.08.01c-.41.07-.65.12-.87.35-.18.2-.28.51-.34.94l-.05.54v.1c-.02.2-.04.41-.09.6v.02a6.98 6.98 0 008.86 1.25 3.56 3.56 0 01-.27-.31c-.27-.34-.61-.91-.5-1.57.06-.31.23-.58.4-.8a5.68 5.68 0 01.7-.7c.15-.14.28-.25.39-.37a.9.9 0 00.2-.26c.07-.23-.02-.4-.13-.5-.1-.06-.3-.13-.6.07l-.33.19c-.09.04-.2.1-.34.12a.6.6 0 01-.54-.18.74.74 0 01-.18-.37 2.57 2.57 0 01-.03-.28v-.07l-.02-.23c-.02-.22-.06-.5-.15-.83-.12-.49-.44-.89-.76-1.3l-.14-.18c-.16-.2-.37-.48-.44-.77a.9.9 0 01.38-1 18.6 18.6 0 001.74-1.65c.3-.31.58-.6.77-.82h.01A6.97 6.97 0 0010 3zm4.64 1.76a42.1 42.1 0 01-2.71 2.66c.03.07.1.18.24.36l.12.16c.32.4.78.97.96 1.68.1.4.15.73.17.98v.01c.6-.33 1.21-.3 1.66.06.46.35.66.97.47 1.57-.08.27-.27.5-.43.66l-.44.43-.11.1c-.2.17-.36.33-.48.48a.83.83 0 00-.19.34c-.04.23.07.5.29.78.1.12.2.23.3.3 0 .01 0 .02.02.03a6.99 6.99 0 00.13-10.6zM8.8 3.36l-.13-.23a7 7 0 00-4.72 10.39l.02-.2c.06-.46.2-1.06.6-1.49.46-.5 1.02-.59 1.4-.65l.1-.02c.21-.03.34-.07.45-.13.1-.05.2-.13.28-.3.03-.06.05-.15.02-.34a4.4 4.4 0 00-.15-.54l-.05-.15c-.15-.5-.37-1.26.09-1.96.4-.6 1.04-.76 1.48-.87l.13-.03c.47-.12.77-.24.98-.68.26-.56.14-1.3-.12-1.98a6.33 6.33 0 00-.38-.83z" />
		</svg>
	)
}
export default EarthIcon
