import { splitProps } from "solid-js"
function TopSpeedIcon(props) {
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
			<path d="M9.25 3.54a6.5 6.5 0 00-3.3 1.36l.83.82a.75.75 0 01-1.06 1.06l-.83-.82A6.39 6.39 0 003.57 9h1.68a.75.75 0 010 1.5H3.53a6.65 6.65 0 002.06 4.2.75.75 0 01-1.03 1.1A8.11 8.11 0 012 9.94C2 5.55 5.59 2 10 2a7.97 7.97 0 015.47 13.8.75.75 0 01-1.02-1.1 6.58 6.58 0 002.03-4.2h-1.73a.75.75 0 010-1.5h1.68a6.48 6.48 0 00-5.68-5.46v1.21a.75.75 0 01-1.5 0v-1.2zm4.2 2.27a.5.5 0 01.75.63l-.12.2a343.95 343.95 0 01-2.2 3.82 30.11 30.11 0 01-.65 1.01 1.5 1.5 0 01-2.28-1.94c.07-.09.2-.2.34-.33l.56-.48a123.93 123.93 0 013.42-2.77l.18-.14z" />
		</svg>
	)
}
export default TopSpeedIcon
