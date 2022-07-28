import { splitProps } from "solid-js"
function KeyboardIcon(props) {
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
			<path d="M3.5 4C2.67 4 2 4.67 2 5.5v8c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-13zm2.75 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm6 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM5 12.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM14.5 8a.75.75 0 110-1.5.75.75 0 010 1.5zM7 10.5A.75.75 0 117 9a.75.75 0 010 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.26.75A.75.75 0 1113 9a.75.75 0 010 1.5zM9.25 7.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
		</svg>
	)
}
export default KeyboardIcon
