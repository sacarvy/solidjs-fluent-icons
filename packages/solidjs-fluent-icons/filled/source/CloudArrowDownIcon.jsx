import { splitProps } from "solid-js"
function CloudArrowDownIcon(props) {
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
			<path d="M10 2c2.82 0 4.41 1.92 4.65 4.25h.07a3.33 3.33 0 013.27 3.66A5.74 5.74 0 007.77 13H5.28A3.33 3.33 0 012 9.62a3.33 3.33 0 013.28-3.37h.07C5.6 3.9 7.18 2 10 2zm3.5 16a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.6-4.9L14 14.2v-2.7a.5.5 0 00-1 0v2.7l-1.1-1.1a.56.56 0 10-.8.8l2 2c.22.22.58.22.8 0l2-2a.56.56 0 10-.8-.8z" />
		</svg>
	)
}
export default CloudArrowDownIcon
