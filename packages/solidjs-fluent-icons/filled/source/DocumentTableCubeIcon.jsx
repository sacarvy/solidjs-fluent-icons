import { splitProps } from "solid-js"
function DocumentTableCubeIcon(props) {
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
			<path d="M9.86 12A2 2 0 009 11v-1h3.5c.28 0 .5.22.5.5V12H9.86zM13 13v1.5a.5.5 0 01-.5.5H10v-2h3zM6.27 9.64l-.38-.2a2 2 0 00-1.78 0L4 9.5v-6C4 2.67 4.67 2 5.5 2H10v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H9.32a2 2 0 00.68-1.5V16h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5c-.5 0-.96.25-1.23.64zM11 2.25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM1.03 16.51v-3.77a1 1 0 01.56-.9l3-1.5a1 1 0 01.89 0l3 1.5a1 1 0 01.55.9v3.77a1 1 0 01-.55.9l-3 1.5a1 1 0 01-.9 0l-3-1.5a1 1 0 01-.55-.9zm1.04-3.58a.5.5 0 00.27.66l2.2.92v2.62a.5.5 0 101 0V14.5l2.19-.92a.5.5 0 10-.4-.93l-2.3.98-2.3-.98a.5.5 0 00-.66.27z" />
		</svg>
	)
}
export default DocumentTableCubeIcon
