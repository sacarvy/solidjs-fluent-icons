import { splitProps } from "solid-js"
function DesktopKeyboardIcon(props) {
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
			<path d="M2 4c0-1.1.9-2 2-2h12a2 2 0 012 2v7.1c-.24-.06-.49-.1-.75-.1H17V4a1 1 0 00-1-1H4a1 1 0 00-1 1v9a1 1 0 001 1h5v3.25c0 .26.04.51.1.75H6.5a.5.5 0 010-1H8v-2H4a2 2 0 01-2-2V4zm9.75 8h5.5c.97 0 1.75.78 1.75 1.75v3.5c0 .97-.78 1.75-1.75 1.75h-5.5c-.97 0-1.75-.78-1.75-1.75v-3.5c0-.97.78-1.75 1.75-1.75zm.25 5.5c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zm.5-3.5a.5.5 0 100-1 .5.5 0 000 1zm1.5 1.5a.5.5 0 10-1 0 .5.5 0 001 0zm.5-1.5a.5.5 0 100-1 .5.5 0 000 1zm1.5 1.5a.5.5 0 10-1 0 .5.5 0 001 0zm.5-1.5a.5.5 0 100-1 .5.5 0 000 1z" />
		</svg>
	)
}
export default DesktopKeyboardIcon
