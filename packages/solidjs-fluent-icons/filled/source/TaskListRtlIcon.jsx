import { splitProps } from "solid-js"
function TaskListRtlIcon(props) {
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
			<path d="M17.85 4.35a.5.5 0 00-.7-.7L15.5 5.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2zm-15.1.15a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM2 15.25c0-.41.34-.75.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zm13.85-3.4l2-2a.5.5 0 00-.7-.7l-1.65 1.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0zm2 3l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default TaskListRtlIcon
