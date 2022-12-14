import { splitProps } from "solid-js"
function FolderIcon(props) {
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
			<path d="M7.17 3c.27 0 .53.07.76.21l.14.09 1.6 1.2h5.83a2.5 2.5 0 012.48 2.17l.01.17L18 7v7.5a2.5 2.5 0 01-2.34 2.5H4.5A2.5 2.5 0 012 14.66V5.5A2.5 2.5 0 014.34 3h2.83zm.99 4.03a1.5 1.5 0 01-.94.46l-.15.01H3v7c0 .78.6 1.42 1.36 1.5H15.5c.78 0 1.42-.6 1.5-1.36V7c0-.78-.6-1.42-1.36-1.5H9.62L8.16 7.03zM7.16 4H4.5c-.78 0-1.42.6-1.5 1.36V6.5h4.07a.5.5 0 00.3-.1l.06-.06L8.7 5.02 7.47 4.1a.5.5 0 00-.22-.1h-.08z" />
		</svg>
	)
}
export default FolderIcon
