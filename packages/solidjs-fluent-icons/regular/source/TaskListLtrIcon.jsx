import { splitProps } from "solid-js"
function TaskListLtrIcon(props) {
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
			<path d="M5.85 4.35a.5.5 0 10-.7-.7L3.5 5.29l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2zM8.5 5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 5a.5.5 0 000 1h9a.5.5 0 000-1h-9zM8 15.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zM5.85 9.85a.5.5 0 10-.7-.7L3.5 10.79l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default TaskListLtrIcon
