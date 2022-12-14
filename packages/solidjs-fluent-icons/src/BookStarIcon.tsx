import { splitProps, ComponentProps, JSX } from "solid-js"

function BookStarIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M4 16V4c0-1.1.9-2 2-2h8a2 2 0 012 2v11a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2zM15 4a1 1 0 00-1-1H6a1 1 0 00-1 1v11h10V4zm-4.55 1.29a.5.5 0 00-.9 0l-.83 1.77-1.93.23a.5.5 0 00-.28.87l1.43 1.33-.38 1.91a.5.5 0 00.73.53l1.71-.95 1.7.95a.5.5 0 00.74-.53l-.38-1.91 1.43-1.33a.5.5 0 00-.28-.87l-1.93-.23-.83-1.77zm-.94 2.44L10 6.7l.49 1.04a.5.5 0 00.39.29l1.14.14-.84.78a.5.5 0 00-.15.46l.22 1.14-1-.56a.5.5 0 00-.5 0l-1 .56.22-1.14a.5.5 0 00-.15-.46l-.84-.78 1.14-.14a.5.5 0 00.4-.29z" />
		</svg>
	)
}
export default BookStarIcon
