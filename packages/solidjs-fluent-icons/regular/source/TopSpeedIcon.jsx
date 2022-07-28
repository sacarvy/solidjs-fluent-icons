import { splitProps } from "solid-js"
function TopSpeedIcon(props) {
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
			<path d="M5.42 4.7A6.97 6.97 0 019.5 3.03V4.5a.5.5 0 001 0V3.02A7 7 0 0116.93 9H15a.5.5 0 000 1h2c0 2-.86 3.9-2.21 5.17a.5.5 0 00.69.73A8.17 8.17 0 0018 10a8 8 0 10-13.44 5.9.5.5 0 00.69-.73A7.2 7.2 0 013 10h2a.5.5 0 100-1H3.07c.2-1.36.78-2.6 1.64-3.58l1.44 1.43a.5.5 0 00.7-.7L5.42 4.7zm8.03 1.1a.5.5 0 01.75.64l-.12.2a343.95 343.95 0 01-2.2 3.82 30.11 30.11 0 01-.65 1.01 1.5 1.5 0 01-2.28-1.94c.07-.09.2-.2.34-.33l.56-.48a123.93 123.93 0 013.42-2.77l.18-.14z" />
		</svg>
	)
}
export default TopSpeedIcon
