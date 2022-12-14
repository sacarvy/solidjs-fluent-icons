import { splitProps } from "solid-js"
function FolderPersonIcon(props) {
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
			<path d="M15.5 4.5h-4.94l-2.4 2.53-.11.1c-.23.2-.52.33-.83.36l-.15.01H2v7.16A2.5 2.5 0 004.5 17h6.54a2.5 2.5 0 012.23-2.99A2.99 2.99 0 0115.5 9a3 3 0 012.5 1.34v-3.5l-.02-.17A2.5 2.5 0 0015.5 4.5zM7.93 3.21A1.5 1.5 0 007.17 3H4.34A2.5 2.5 0 002 5.5v1h5.15a.5.5 0 00.22-.1l.06-.06L9.4 4.3 8.06 3.3l-.14-.09zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default FolderPersonIcon
