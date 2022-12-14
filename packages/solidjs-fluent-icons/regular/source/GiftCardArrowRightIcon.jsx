import { splitProps } from "solid-js"
function GiftCardArrowRightIcon(props) {
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
			<path d="M2 4.75A2.75 2.75 0 014.75 2h10.5A2.75 2.75 0 0118 4.75v5.5a5.5 5.5 0 00-1-.65V8H8.7l1.65 1.65a.5.5 0 01-.7.7L8 8.71V13h1.2c-.08.32-.15.66-.18 1H4.75A2.75 2.75 0 012 11.25v-6.5zM4.75 3C3.78 3 3 3.78 3 4.75V7h1.27A2 2 0 017 4.27V3H4.75zM8 3v1.27A2 2 0 0110.73 7H17V4.75C17 3.78 16.22 3 15.25 3H8zm0 4h1a1 1 0 10-1-1v1zM6 5a1 1 0 000 2h1V6a1 1 0 00-1-1zM3 8v3.25c0 .97.78 1.75 1.75 1.75H7V8.7l-1.65 1.65a.5.5 0 01-.7-.7L6.29 8H3zm16 6.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default GiftCardArrowRightIcon
