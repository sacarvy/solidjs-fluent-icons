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
			<path d="M7.87 11.43l.13.05V10h-.5a.5.5 0 00-.48.35c.39.26.7.64.85 1.08zM13 13H9.32l.47.93a2 2 0 01.21.9V15h2.5a.5.5 0 00.5-.5V13zm-7.17-3l.25.01A1.5 1.5 0 017.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H10v1a2 2 0 01-.27 1h4.77c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5V2H5.5C4.67 2 4 2.67 4 3.5V10h1.83zm7.17.5V12H9v-2h3.5c.28 0 .5.22.5.5zm-2-4V2.25L15.75 7H11.5a.5.5 0 01-.5-.5zM2.17 11C1.52 11 1 11.52 1 12.17v4.66c0 .48.28.88.69 1.07a1.33 1.33 0 002.6.1h.75a1.33 1.33 0 002.58 0H8a1 1 0 001-1v-2.18a1 1 0 00-.1-.44l-.75-1.5a1 1 0 00-.9-.55H7v-.16C7 11.52 6.48 11 5.83 11H2.17zM7 14.33V13h.25c.13 0 .25.07.3.18l.58 1.15H7zm-4.67 3.34a.67.67 0 111.34 0 .67.67 0 01-1.34 0zm4 .66a.67.67 0 110-1.33.67.67 0 010 1.33z" />
		</svg>
	)
}
export default DocumentTableTruckIcon
