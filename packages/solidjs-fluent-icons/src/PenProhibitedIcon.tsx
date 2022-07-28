import { splitProps, ComponentProps, JSX } from "solid-js"

function PenProhibitedIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M12.92 2.87a2.97 2.97 0 014.2 4.2L15 9.22c-.39-.11-.8-.18-1.21-.2l2.63-2.64a1.97 1.97 0 00-2.8-2.79l-9.37 9.37c-.2.2-.32.44-.38.7l-.71 3.2 3.16-.71c.28-.06.54-.2.74-.41l.95-.95c.02.42.09.83.2 1.22l-.44.44c-.34.34-.77.57-1.24.67L2.61 18a.5.5 0 01-.6-.6l.88-3.95c.1-.45.33-.87.66-1.2l9.37-9.37zM9 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 01-2.8 5.6z" />
		</svg>
	)
}
export default PenProhibitedIcon
