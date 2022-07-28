import { splitProps } from "solid-js"
function BoxSearchIcon(props) {
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
			<path d="M11.3 2.48a3.5 3.5 0 00-2.6 0l-5.76 2.3A1.5 1.5 0 002 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 002.6 0l.1-.04a4.51 4.51 0 01-.98-.7c-.32.1-.67.08-.98-.04l-.3-.12-.07-.03-5.76-2.3a.5.5 0 01-.31-.47V6.24l6.5 2.6v2.6c.25-.5.6-.93 1-1.3v-1.3l6.5-2.6v4.43c.63.77 1 1.76 1 2.83V6.18a1.5 1.5 0 00-.94-1.4l-5.76-2.3zm-2.23.93a2.5 2.5 0 011.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54zm-2.7 1.08l6.16 2.46L10 7.96 3.85 5.5l2.53-1.01zm9.93 11.1a3.5 3.5 0 10-.7.7l2.55 2.56a.5.5 0 00.7-.7L16.3 15.6zM16 13.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
		</svg>
	)
}
export default BoxSearchIcon
