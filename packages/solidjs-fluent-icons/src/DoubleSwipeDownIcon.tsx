import { splitProps, ComponentProps, JSX } from "solid-js"

function DoubleSwipeDownIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.85 17.85a.5.5 0 01-.7 0l-3-3a.5.5 0 11.7-.7L5 16.29V5.5a.5.5 0 111 0v10.8l2.15-2.15a.5.5 0 01.7.7l-3 3zm9 0a.5.5 0 01-.7 0l-3-3a.5.5 0 01.7-.7L14 16.29V5.5a.5.5 0 011 0v10.8l2.15-2.15a.5.5 0 01.7.7l-3 3zM11 5.5c0 1.4.82 2.6 2 3.16V7.5a2.5 2.5 0 113 0v1.16a3.5 3.5 0 10-5-3.16zM4 8.66a3.5 3.5 0 113 0V7.5a2.5 2.5 0 10-3 0v1.16z" />
		</svg>
	)
}
export default DoubleSwipeDownIcon
