import { splitProps, ComponentProps, JSX } from "solid-js"

function DrinkBeerIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M12.5 8a.5.5 0 00-1 0v6a.5.5 0 001 0V8zm-3-.5c.28 0 .5.22.5.5v6a.5.5 0 01-1 0V8c0-.28.22-.5.5-.5zm-2 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V8zm-1-6A2.5 2.5 0 004 4.5v11.75c0 .97.78 1.75 1.75 1.75h7.5c.97 0 1.75-.78 1.75-1.75V15h.5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0015.5 5H15v-.5A2.5 2.5 0 0012.5 2h-6zM15 6h.5c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5H15V6zM5 4.5C5 3.67 5.67 3 6.5 3h6c.83 0 1.5.67 1.5 1.5V5H5v-.5zM5 6h9v10.25c0 .41-.34.75-.75.75h-7.5a.75.75 0 01-.75-.75V6z" />
		</svg>
	)
}
export default DrinkBeerIcon
