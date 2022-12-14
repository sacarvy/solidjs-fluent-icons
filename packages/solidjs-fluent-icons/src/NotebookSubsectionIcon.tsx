import { splitProps, ComponentProps, JSX } from "solid-js"

function NotebookSubsectionIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 5.5A3.5 3.5 0 017.5 2H10c.82 0 1.54.4 2 1H7.5A2.5 2.5 0 005 5.5V15a2.5 2.5 0 01-1-2V5.5zM13.43 2h.07c.25 0 .46.23.5.52V17.4c0 .33-.22.6-.5.6-.25 0-.46-.23-.5-.52V17H8a2 2 0 01-2-2V6c0-1.1.9-2 2-2h5V2.6c0-.3.19-.55.43-.6zM8 5a1 1 0 00-1 1v9a1 1 0 001 1h5V5H8z" />
		</svg>
	)
}
export default NotebookSubsectionIcon
