import { splitProps } from "solid-js"
function DocumentTableTruckIcon(props) {
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
			<path d="M7.5 9a1.5 1.5 0 00-1.42 1.01c.35.04.67.16.94.34A.5.5 0 017.5 10H8v1.48a2 2 0 011.04.96l.28.56H13v1.5a.5.5 0 01-.5.5H10v1h2.5c.83 0 1.5-.67 1.5-1.5v-4c0-.83-.67-1.5-1.5-1.5h-5zm5.5 3H9v-2h3.5c.28 0 .5.22.5.5V12zm-9-2h1V4a1 1 0 011-1h4v3.5c0 .83.67 1.5 1.5 1.5H15v8a1 1 0 01-1 1h-4a2 2 0 01-.27 1H14a2 2 0 002-2V7.41c0-.4-.16-.78-.44-1.06l-3.91-3.91A1.5 1.5 0 0010.59 2H6a2 2 0 00-2 2v6zm10.8-3h-3.3a.5.5 0 01-.5-.5V3.2L14.8 7zM2.16 11C1.52 11 1 11.52 1 12.17v4.66c0 .48.28.88.69 1.07a1.33 1.33 0 002.6.1h.75a1.33 1.33 0 002.58 0H8a1 1 0 001-1v-2.18a1 1 0 00-.1-.44l-.75-1.5a1 1 0 00-.9-.55H7v-.16C7 11.52 6.48 11 5.83 11H2.17zM7 14.33V13h.25c.13 0 .25.07.3.18l.58 1.15H7zm-4.67 3.34a.67.67 0 111.34 0 .67.67 0 01-1.34 0zm4 .66a.67.67 0 110-1.33.67.67 0 010 1.33z" />
		</svg>
	)
}
export default DocumentTableTruckIcon
