import { splitProps, ComponentProps, JSX } from "solid-js"

function FlashlightIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.46 1.67a.5.5 0 00-1 0v.83a.5.5 0 101 0v-.83zm3.4 1.18a.5.5 0 10-.71-.7l-1.5 1.5a.5.5 0 00.7.7l1.5-1.5zm-10 10a.5.5 0 00-.71-.7l-1 1a.5.5 0 10.7.7l1-1zM7 5v3.8l-4.3 4.29a2 2 0 000 2.82L4.1 17.3a2 2 0 002.82 0l4.3-4.3H15a.5.5 0 00.35-.14l1.44-1.44a2 2 0 000-2.82L11.41 3.2a2 2 0 00-2.82 0L7.15 4.65A.5.5 0 007 5zM9.3 3.9a1 1 0 011.4 0L16.1 9.3a1 1 0 010 1.42L15 11.79 8.2 5l1.1-1.08zM8 6.21L13.8 12h-2.6L8 8.8V6.2zm-.5 3.5l2.8 2.79-4.1 4.09a1 1 0 01-1.4 0L3.4 15.2a1 1 0 010-1.42L7.5 9.71zm10-4.17a.5.5 0 000 1h.83a.5.5 0 000-1h-.83z" />
		</svg>
	)
}
export default FlashlightIcon
