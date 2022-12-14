import { splitProps } from "solid-js"
function CameraOffIcon(props) {
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
			<path d="M3.5 4.2L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-.95-.95c-.22.07-.46.1-.7.1h-11A2.5 2.5 0 012 14.5v-8c0-1.02.62-1.9 1.5-2.3zm8.95 8.96l-.71-.71a3 3 0 01-4.18-4.18l-.72-.72a4 4 0 005.61 5.61zM9.22 7.1l3.68 3.68A3 3 0 009.22 7.1zM14 10c0 .55-.11 1.08-.32 1.56l4.06 4.06c.17-.34.26-.72.26-1.12v-8A2.5 2.5 0 0015.5 4h-1.69l-.58-1.17A1.5 1.5 0 0011.89 2H8.12a1.5 1.5 0 00-1.34.83L6.2 4h-.07l2.32 2.32A3.99 3.99 0 0114 10z" />
		</svg>
	)
}
export default CameraOffIcon
