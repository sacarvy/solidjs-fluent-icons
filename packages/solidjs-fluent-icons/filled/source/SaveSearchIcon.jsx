import { splitProps } from "solid-js"
function SaveSearchIcon(props) {
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
			<path d="M3 5c0-1.1.9-2 2-2h1v3.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V3h.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V15a2 2 0 01-2 2v-5.5c0-.83-.67-1.5-1.5-1.5H9.33a4.5 4.5 0 00-6.33.67V5zm7.56 10.44L12.12 17H14v-5.5a.5.5 0 00-.5-.5h-3.26a4.5 4.5 0 01.32 4.44zM12 3H7v3.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V3zm-2 10.5c0 .79-.26 1.51-.7 2.1l2.55 2.55a.5.5 0 01-.7.7L8.6 16.3a3.5 3.5 0 111.4-2.8zm-6 0a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0z" />
		</svg>
	)
}
export default SaveSearchIcon
