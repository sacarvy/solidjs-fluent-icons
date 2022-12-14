import { splitProps } from "solid-js"
function LocationLiveIcon(props) {
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
			<path d="M8.53 3.01L9 3a7 7 0 016.98 7.47.5.5 0 101 .07L17 10A8 8 0 008.46 2a.5.5 0 10.07 1zM8 4.98a.5.5 0 01.52-.47 6.25 6.25 0 015.97 5.97.5.5 0 11-1 .04A5.25 5.25 0 008.49 5.5.5.5 0 018 4.98zM6.04 16.4l1.1 1.1c.2.2.52.2.71 0L9 16.37l1.7-1.69a4.5 4.5 0 10-6.37 0l1.72 1.72zm1.46-3.78a1.13 1.13 0 110-2.25 1.13 1.13 0 010 2.25z" />
		</svg>
	)
}
export default LocationLiveIcon
