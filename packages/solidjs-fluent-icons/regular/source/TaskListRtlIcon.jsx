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
			<path d="M17.85 4.35a.5.5 0 00-.7-.7L15.5 5.29l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2zM2.5 5a.5.5 0 000 1h9a.5.5 0 000-1h-9zm0 5a.5.5 0 000 1h9a.5.5 0 000-1h-9zM2 15.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm15.85-5.65a.5.5 0 00-.7-.7l-1.65 1.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 4.3c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 1.65-1.64c.2-.2.5-.2.7 0z" />
		</svg>
	)
}
export default TaskListRtlIcon
