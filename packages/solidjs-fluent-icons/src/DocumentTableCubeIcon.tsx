import { splitProps, ComponentProps, JSX } from "solid-js"

function DocumentTableCubeIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 9c-.5 0-.96.25-1.23.64l.93.46a.5.5 0 01.3-.1H8v.5l.9.45.1.05v-1h3.5c.28 0 .5.22.5.5V12H9.86a2 2 0 01.14.74V13h3v1.5a.5.5 0 01-.5.5H10v1h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5zm-3.4.45a2 2 0 01.9-.21V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1H9.94a2 2 0 01-.62 1H14a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6a2 2 0 00-2 2v5.5l.1-.05zM14.8 7h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM1.02 16.5v-3.76a1 1 0 01.56-.9l3-1.5a1 1 0 01.89 0l3 1.5a1 1 0 01.55.9v3.77a1 1 0 01-.55.9l-3 1.5a1 1 0 01-.9 0l-3-1.5a1 1 0 01-.55-.9zm1.04-3.57a.5.5 0 00.27.66l2.2.92v2.62a.5.5 0 101 0V14.5l2.19-.92a.5.5 0 10-.4-.93l-2.3.98-2.3-.98a.5.5 0 00-.66.27z" />
		</svg>
	)
}
export default DocumentTableCubeIcon
