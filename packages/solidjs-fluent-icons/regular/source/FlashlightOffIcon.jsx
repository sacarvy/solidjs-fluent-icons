import { splitProps } from "solid-js"
function FlashlightOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L7 7.71v1.08l-4.3 4.3a2 2 0 000 2.82L4.1 17.3a2 2 0 002.82 0l4.3-4.29h1.08l4.86 4.85a.5.5 0 00.7-.7l-15-15zm12.67 9.13l-1.06 1.06.65.65a.5.5 0 00.24-.14l1.44-1.44a2 2 0 000-2.82L11.41 3.2a2 2 0 00-2.82 0L7.15 4.65a.5.5 0 00-.14.24l.65.65L9.3 3.91a1 1 0 011.42 0l5.38 5.38a1 1 0 010 1.42l-.57.57zm-7.67 1.57a.5.5 0 10-.7-.7l-1 1a.5.5 0 10.7.7l1-1zM7.5 9.71l2.8 2.79-4.1 4.09a1 1 0 01-1.4 0L3.4 15.2a1 1 0 010-1.42L7.5 9.71z" />
		</svg>
	)
}
export default FlashlightOffIcon
