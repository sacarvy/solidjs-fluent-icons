import { splitProps } from "solid-js"
function TextboxAlignBottomIcon(props) {
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
			<path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zM6.7 14h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75zm0-3h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75z" />
		</svg>
	)
}
export default TextboxAlignBottomIcon
