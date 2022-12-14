import { splitProps, ComponentProps, JSX } from "solid-js"

function ChartPersonIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M10 2c.28 0 .5.22.5.5V3h4.75A2.75 2.75 0 0118 5.75v4.6c-.26-.4-.6-.72-1-.95V5.75c0-.65-.35-1.22-.88-1.52l-.02-.01a1.74 1.74 0 00-.85-.22H4.75C3.78 4 3 4.78 3 5.75v6.55c.03.94.8 1.7 1.75 1.7h8.51l.01.01a2.5 2.5 0 00-1.77.99H7.77l-1.85 2.78a.5.5 0 11-.84-.55L6.57 15H4.75A2.75 2.75 0 012 12.25v-6.5A2.75 2.75 0 014.75 3H9.5v-.5c0-.28.22-.5.5-.5zM5 6.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h4a.5.5 0 000-1h-4zM5 9c0-.27.22-.5.5-.5h5a.5.5 0 010 1h-5A.5.5 0 015 9zm12.5 3a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default ChartPersonIcon
