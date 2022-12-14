import { splitProps } from "solid-js"
function FoodAppleIcon(props) {
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
			<path d="M12.16 2.97a.5.5 0 00-.32-.94 3.18 3.18 0 00-1.86 1.9c-.05.11-.1.23-.13.34A4 4 0 006.2 2.14c-.58.01-1.05.48-1.06 1.06A3.99 3.99 0 006.3 6.14l.03.03A4 4 0 003.2 9.76v.07a8.5 8.5 0 001 4.75l.36.66a.5.5 0 00.03.05l1 1.4a2.69 2.69 0 004.09.34.46.46 0 01.64 0 2.69 2.69 0 004.09-.34l1-1.4a.51.51 0 00.03-.05l.36-.66a8.5 8.5 0 001-4.75v-.07a4 4 0 00-4.64-3.63l-1.66.28c.01-.68.13-1.45.4-2.1.28-.67.7-1.15 1.26-1.34zm-5.25 6c-.28.1-.54.27-.72.6-.18.36-.31.93-.2 1.87a.5.5 0 01-.99.12c-.13-1.06 0-1.86.31-2.45.32-.6.8-.93 1.28-1.08a.5.5 0 01.32.94z" />
		</svg>
	)
}
export default FoodAppleIcon
