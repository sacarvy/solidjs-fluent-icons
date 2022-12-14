import { splitProps, ComponentProps, JSX } from "solid-js"

function HdIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M5.5 7c.28 0 .5.22.5.5V10h2.5V7.5a.5.5 0 011 0v5a.5.5 0 01-1 0V11H6v1.5a.5.5 0 01-1 0v-5c0-.28.22-.5.5-.5zM11 7a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h1.42A2.58 2.58 0 0015 10.42v-.84A2.58 2.58 0 0012.42 7H11zm1.42 5h-.92V8h.92c.87 0 1.58.7 1.58 1.58v.84c0 .87-.7 1.58-1.58 1.58zM3 6a3 3 0 013-3h8a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm3-2a2 2 0 00-2 2v8c0 1.1.9 2 2 2h8a2 2 0 002-2V6a2 2 0 00-2-2H6z" />
		</svg>
	)
}
export default HdIcon
