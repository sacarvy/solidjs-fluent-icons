import { splitProps } from "solid-js"
function PictureInPictureEnterIcon(props) {
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
			<path d="M4.75 3A2.75 2.75 0 002 5.75v6.5A2.75 2.75 0 004.75 15H9v-2.5a2.5 2.5 0 012.5-2.5h6c.17 0 .34.02.5.05v-4.3A2.75 2.75 0 0015.25 3H4.75zm.6 2.65L8 8.29V6.5a.5.5 0 011 0v3a.5.5 0 01-.5.5h-3a.5.5 0 010-1h1.8L4.64 6.35a.5.5 0 11.7-.7zM18 11.09a1.5 1.5 0 00-.5-.09h-6c-.83 0-1.5.67-1.5 1.5v4c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-4c0-.65-.42-1.2-1-1.41z" />
		</svg>
	)
}
export default PictureInPictureEnterIcon
