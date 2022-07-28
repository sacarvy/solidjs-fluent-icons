import { splitProps } from "solid-js"
function PhoneVibrateIcon(props) {
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
			<path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm3.5 10.5a.5.5 0 000 1h3a.5.5 0 000-1h-3zM2.92 7.22a.5.5 0 00-.84.56l.38.57c.29.42.32.97.1 1.43-.4.78-.34 1.7.14 2.43l.38.57a.5.5 0 10.84-.56l-.38-.57a1.43 1.43 0 01-.1-1.43c.4-.78.34-1.7-.14-2.43l-.38-.57zm13.3-.14a.5.5 0 01.7.14l.38.57c.48.73.54 1.65.15 2.43-.23.46-.2 1 .09 1.43l.38.57a.5.5 0 11-.84.56l-.38-.57a2.43 2.43 0 01-.15-2.43c.23-.46.2-1-.09-1.43l-.38-.57a.5.5 0 01.14-.7z" />
		</svg>
	)
}
export default PhoneVibrateIcon
