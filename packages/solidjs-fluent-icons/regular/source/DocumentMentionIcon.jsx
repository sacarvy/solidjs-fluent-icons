import { splitProps } from "solid-js"
function DocumentMentionIcon(props) {
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
			<path d="M6 2a2 2 0 00-2 2v5.2c.32-.08.66-.15 1-.18V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-4c-.43.44-1 .74-1.65.82l.04.18H14a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6zm8.8 5h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM6.67 17.71a.54.54 0 01.43.99l-.06.03-.19.06A4.5 4.5 0 1110 14.5c0 1.3-.89 2.34-1.98 2.34-.52 0-.92-.2-1.18-.58a1.8 1.8 0 01-1.38.58A1.82 1.82 0 014 16.07a2.66 2.66 0 01-.48-1.57c0-.6.17-1.15.48-1.57a1.84 1.84 0 012.47-.5.54.54 0 011 .2l.01.07v1.8c0 .9.2 1.26.54 1.26.45 0 .9-.52.9-1.26a3.42 3.42 0 10-2.59 3.32l.2-.06.15-.05zM5 13.44c-.25.22-.4.6-.4 1.06 0 .46.15.84.4 1.06.14.13.31.2.5.2.52 0 .9-.54.9-1.26s-.38-1.26-.9-1.26a.74.74 0 00-.5.2z" />
		</svg>
	)
}
export default DocumentMentionIcon
