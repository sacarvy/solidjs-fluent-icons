import { splitProps } from "solid-js"
function EmojiSmileSlightIcon(props) {
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
			<path d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm4-1a1 1 0 110 2 1 1 0 010-2zm-4.03 5.55c.42.21.97.32 1.53.32a3.5 3.5 0 001.53-.32.5.5 0 11.44.9c-.58.29-1.28.43-1.97.43s-1.39-.14-1.97-.43a.5.5 0 11.44-.9z" />
		</svg>
	)
}
export default EmojiSmileSlightIcon
