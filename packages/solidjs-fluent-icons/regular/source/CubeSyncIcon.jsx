import { splitProps } from "solid-js"
function CubeSyncIcon(props) {
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
			<path d="M5.7 6.04a.5.5 0 10-.4.92l4.2 1.86v3.39a5.5 5.5 0 011-1.48v-1.9l4.2-1.87a.5.5 0 10-.4-.92L10 7.95l-4.3-1.9zM9.07 16.6c.13.05.26.1.4.12.16.38.36.73.6 1.06a3.5 3.5 0 01-1.37-.25l-5.76-2.3a1.5 1.5 0 01-.94-1.4V6.18c0-.62.37-1.17.94-1.4l5.76-2.3a3.5 3.5 0 012.6 0l5.76 2.3c.57.23.94.78.94 1.4v4.08a5.5 5.5 0 00-1-.66V6.18a.5.5 0 00-.31-.47l-5.76-2.3a2.5 2.5 0 00-1.86 0l-5.76 2.3a.5.5 0 00-.31.47v7.64c0 .2.12.4.31.47l5.76 2.3zM10 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.97 1.97 0 00-.94-.25 2 2 0 00-1.44.59.5.5 0 01-.71-.71 3 3 0 013.62-.48V12c0-.28.22-.5.5-.5zm-.88 5.53a3 3 0 01-2.62-.18V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.97 1.97 0 00.94.25 2 2 0 001.44-.59.5.5 0 01.71.71 3 3 0 01-1 .66z" />
		</svg>
	)
}
export default CubeSyncIcon
