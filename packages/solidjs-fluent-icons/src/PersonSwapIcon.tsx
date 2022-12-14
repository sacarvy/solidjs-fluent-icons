import { splitProps, ComponentProps, JSX } from "solid-js"

function PersonSwapIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M9 2a4 4 0 100 8 4 4 0 000-8zM6 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.29 0 .57 0 .85-.03L8.88 17a8.07 8.07 0 01-4.2-1.05A3.36 3.36 0 013 13a1 1 0 011-1h10a1 1 0 01.67.25c.32-.21.7-.3 1.07-.23A2 2 0 0014 11H4zm7.85 6.85a.5.5 0 01-.7 0l-2-2a.5.5 0 010-.7l2-2a.5.5 0 01.7.7L10.71 15h5.58l-1.14-1.15a.5.5 0 01.7-.7l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L16.29 16h-5.58l1.14 1.15c.2.2.2.5 0 .7z" />
		</svg>
	)
}
export default PersonSwapIcon
