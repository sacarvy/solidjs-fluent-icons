import { splitProps } from "solid-js"
function MergeIcon(props) {
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
			<path d="M3 5.75c0-.41.34-.75.75-.75h1.76c1 0 1.95.4 2.65 1.1l2.5 2.5c.41.41.99.65 1.58.65h3.2l-2.97-2.97a.75.75 0 011.06-1.06l4.25 4.25c.3.3.3.77 0 1.06l-4.25 4.25a.75.75 0 11-1.06-1.06l2.97-2.97h-3.2c-.6 0-1.17.24-1.59.66l-2.5 2.5C7.46 14.6 6.5 15 5.52 15H3.75a.75.75 0 010-1.5h1.76c.6 0 1.17-.24 1.59-.66l2.5-2.5c.12-.12.25-.23.4-.34-.15-.1-.28-.22-.4-.35l-2.5-2.5c-.42-.41-1-.65-1.6-.65H3.76A.75.75 0 013 5.75z" />
		</svg>
	)
}
export default MergeIcon
