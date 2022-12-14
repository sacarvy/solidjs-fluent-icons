import { splitProps } from "solid-js"
function DataUsageEditIcon(props) {
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
			<path d="M4 15h5.99c-.23.3-.4.64-.51 1H4a2 2 0 01-2-2V4c0-1.1.9-2 2-2h10a2 2 0 012 2v5.23c-.33.14-.63.34-.9.61l-.1.1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1zm8-9.5a.5.5 0 011 0v6.44l-.88.88a.5.5 0 01-.12-.32v-7zm-7 2a.5.5 0 011 0v5a.5.5 0 01-1 0v-5zM9 9a.5.5 0 00-.5.5v3a.5.5 0 001 0v-3A.5.5 0 009 9zm1.98 6.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.82 4.83a2.2 2.2 0 01-1.03.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" />
		</svg>
	)
}
export default DataUsageEditIcon
