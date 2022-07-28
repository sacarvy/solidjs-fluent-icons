import { splitProps } from "solid-js"
function TasksAppIcon(props) {
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
			<path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v9.88l-2.5 2.52-.93-.95a1.5 1.5 0 10-2.14 2.1l.44.45H6a2 2 0 01-2-2V4zm5 5.5c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zM9.5 5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM9 13.5c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5zm-2-3a1 1 0 100-2 1 1 0 000 2zm1-5a1 1 0 10-2 0 1 1 0 002 0zm-1 9a1 1 0 100-2 1 1 0 000 2zm10.86.35a.5.5 0 00-.72-.7l-3.64 3.68-1.64-1.68a.5.5 0 10-.72.7l1.93 1.97a.6.6 0 00.86 0l3.93-3.97z" />
		</svg>
	)
}
export default TasksAppIcon
