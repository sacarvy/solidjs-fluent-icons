import { splitProps } from "solid-js"
function DocumentSaveIcon(props) {
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
			<path d="M10 2v4.5c0 .83.67 1.5 1.5 1.5H16v8.5c0 .83-.67 1.5-1.5 1.5H11v-5.59a2 2 0 00-.59-1.41L9 9.59A2 2 0 007.59 9H4V3.5C4 2.67 4.67 2 5.5 2H10zm1 .25V6.5c0 .28.22.5.5.5h4.25L11 2.25zM2 10h1v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5v-2.41c.1.05.2.12.3.2l1.4 1.42a1 1 0 01.3.7V18a1 1 0 01-1 1v-4.5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5V19a1 1 0 01-1-1v-7a1 1 0 011-1zm6 5v4H3v-4h5zm-4-5h3v2H4v-2z" />
		</svg>
	)
}
export default DocumentSaveIcon
