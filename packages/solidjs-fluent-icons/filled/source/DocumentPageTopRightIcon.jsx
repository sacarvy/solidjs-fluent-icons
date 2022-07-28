import { splitProps } from "solid-js"
function DocumentPageTopRightIcon(props) {
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
			<path d="M12.75 5.5L12.53 7H11.3l.22-1.5h1.24zM5.5 2C4.67 2 4 2.67 4 3.5v13c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-13c0-.83-.67-1.5-1.5-1.5h-9zm4.57 6.44l.07-.44H9.5a.5.5 0 110-1h.78l.22-1.5H10a.5.5 0 110-1h.65l.16-1.07a.5.5 0 01.99.14l-.14.93h1.24l.16-1.07a.5.5 0 01.99.14l-.14.93h.59a.5.5 0 010 1h-.74L13.54 7H14a.5.5 0 010 1h-.6l-.09.59a.5.5 0 01-.99-.15L12.4 8h-1.24l-.09.59a.5.5 0 01-.99-.15z" />
		</svg>
	)
}
export default DocumentPageTopRightIcon
