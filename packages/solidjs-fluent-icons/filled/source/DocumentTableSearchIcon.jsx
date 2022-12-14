import { splitProps } from "solid-js"
function DocumentTableSearchIcon(props) {
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
			<path d="M9 15h3.5a.5.5 0 00.5-.5V13H9v2zm.12 1l1.44 1.44c.16.16.28.36.35.56h3.59c.83 0 1.5-.67 1.5-1.5V8h-4.5A1.5 1.5 0 0110 6.5V2H5.5C4.67 2 4 2.67 4 3.5v5.53a4.55 4.55 0 012.44.4A1.5 1.5 0 017.5 9h5c.83 0 1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5H9.12zM13 12v-1.5a.5.5 0 00-.5-.5H9v2h4zm-2-9.75V6.5c0 .28.22.5.5.5h4.25L11 2.25zM7.3 15.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 10.7-.7L7.3 15.6zM7 13.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
		</svg>
	)
}
export default DocumentTableSearchIcon
