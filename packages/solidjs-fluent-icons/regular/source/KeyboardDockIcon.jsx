import { splitProps } from "solid-js"
function KeyboardDockIcon(props) {
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
			<path d="M5.5 10a.5.5 0 000 1h9a.5.5 0 000-1h-9zm6.75-4.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.5 6a.75.75 0 100-1.5.75.75 0 000 1.5zm-8.25-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7 8.5A.75.75 0 107 7a.75.75 0 000 1.5zm3.75-.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.26.75A.75.75 0 1013 7a.75.75 0 000 1.5zM9.25 5.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM3.5 2C2.67 2 2 2.67 2 3.5v8c0 .83.67 1.5 1.5 1.5h6v3.3l-1.15-1.15a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l2-2a.5.5 0 00-.7-.7l-1.15 1.14V13h6c.83 0 1.5-.67 1.5-1.5v-8c0-.83-.67-1.5-1.5-1.5h-13zm13 10h-13a.5.5 0 01-.5-.5v-8c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v8a.5.5 0 01-.5.5z" />
		</svg>
	)
}
export default KeyboardDockIcon
