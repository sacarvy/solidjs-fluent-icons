import { splitProps } from "solid-js"
function WeatherHailNightIcon(props) {
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
			<path d="M11 16.67A.67.67 0 1111 18a.67.67 0 010-1.33zM8.67 16a.67.67 0 110 1.33.67.67 0 010-1.33zm4.66 0a.67.67 0 110 1.33.67.67 0 010-1.33zM11 6c2.46 0 3.86 1.57 4.07 3.47h.06A2.82 2.82 0 0118 12.24 2.82 2.82 0 0115.13 15H6.87A2.82 2.82 0 014 12.24c0-1.47 1.2-2.67 2.7-2.76h.23C7.13 7.55 8.53 6 11 6zm0 1a3.04 3.04 0 00-3.09 3.02c0 .28-.25.5-.54.5h-.55c-1 0-1.82.78-1.82 1.74S5.81 14 6.82 14h8.36c1 0 1.82-.78 1.82-1.74s-.81-1.74-1.82-1.74h-.55c-.29 0-.54-.22-.54-.5A3.02 3.02 0 0011 7zM5.84 2a4.24 4.24 0 013.88 3.14c-.39.08-.74.2-1.08.36A3.05 3.05 0 007 3.38c-.19-.1-.34-.18-.54-.25a5.87 5.87 0 01-.62 3.44 5 5 0 01-2.56 1.9c.14.12.3.23.45.34.31.2.62.35.92.46-.33.22-.63.5-.88.8l-.28-.14A4.24 4.24 0 012.1 8.66a.63.63 0 01.3-.95c1.38-.49 2.12-1.04 2.55-1.85.46-.89.55-1.82.24-3.08-.1-.41.22-.8.64-.78z" />
		</svg>
	)
}
export default WeatherHailNightIcon
