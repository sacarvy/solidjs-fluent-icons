import { splitProps, ComponentProps, JSX } from "solid-js"

function XboxControllerIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.33 4.71a2.12 2.12 0 00-1.35-.17l-.9.17c-.7.14-1.32.6-1.66 1.25-1.1 2.16-1.94 3.93-2.27 5.43a4.51 4.51 0 00.82 4.06c.66.82 1.8.65 2.4-.02l1.51-1.73A2 2 0 018.4 13h3.19a2 2 0 011.52.7c.51.6 1.04 1.2 1.51 1.73.6.67 1.75.84 2.4.02a4.51 4.51 0 00.82-4.06c-.33-1.5-1.16-3.27-2.27-5.43A2.37 2.37 0 0013.9 4.7l-.89-.17a2.12 2.12 0 00-1.35.17l-.06.03c-.32.17-.67.26-1.01.26H9.4c-.35 0-.7-.1-1.02-.26l-.06-.03zm-1.16.81c.26-.05.51-.02.71.08l.06.03c.44.23.94.37 1.47.37h1.18c.52 0 1.02-.14 1.47-.37l.05-.03c.2-.1.45-.13.71-.08l.9.17c.41.08.77.35.96.72 1.12 2.18 1.89 3.84 2.18 5.2.29 1.31.12 2.3-.62 3.22-.18.22-.59.26-.87-.06-.46-.53-1-1.13-1.5-1.73A3 3 0 0011.59 12H8.4a3 3 0 00-2.27 1.04l-1.5 1.73c-.3.32-.7.28-.88.06-.73-.92-.9-1.9-.62-3.22.3-1.36 1.06-3.02 2.18-5.2.2-.37.55-.64.96-.72l.9-.17zM10 8.5A.75.75 0 1010 7a.75.75 0 000 1.5z" />
		</svg>
	)
}
export default XboxControllerIcon
