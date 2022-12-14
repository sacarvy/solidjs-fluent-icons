import { splitProps } from "solid-js"
function TextSubscriptIcon(props) {
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
			<path d="M13.78 4.99A.75.75 0 0012.64 4L8.5 8.85 4.35 4A.75.75 0 103.22 5L7.52 10l-4.3 5.01a.75.75 0 001.13.98l4.15-4.84 3.85 4.5c.13-.55.38-.99.66-1.34-.35-.24-.6-.6-.71-1.03L9.49 10l4.3-5.01zm1.55 7.26c-.3 0-.58.3-.58.61a.75.75 0 01-1.5 0 2.12 2.12 0 013.88-1.17c.42.64.42 1.46-.04 2.24-.23.4-.55.69-.84.92l-.44.32-.06.05-.33.23c-.14.1-.25.2-.35.3h1.62a.75.75 0 010 1.5h-2.64a.73.73 0 01-.05 0 .75.75 0 01-.75-.75c0-1.16.69-1.8 1.27-2.25l.37-.26.06-.04.37-.28c.23-.18.38-.34.48-.5.21-.36.14-.57.08-.66a.64.64 0 00-.55-.26z" />
		</svg>
	)
}
export default TextSubscriptIcon
