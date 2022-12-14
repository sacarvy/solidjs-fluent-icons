import { splitProps, ComponentProps, JSX } from "solid-js"

function SkipForward10Icon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 3.5a.5.5 0 00-1 0v2.2A8 8 0 002.84 7.45a.5.5 0 00.9.44A7 7 0 0115.75 7H12.5a.5.5 0 000 1h4a.5.5 0 00.5-.5v-4zm-6.5 7.63c.4-.7 1.07-1.13 2-1.13.94 0 1.6.44 2 1.13.38.65.5 1.5.5 2.37 0 .86-.12 1.72-.5 2.37-.4.7-1.06 1.13-2 1.13-.93 0-1.6-.44-2-1.13-.37-.65-.5-1.5-.5-2.37 0-.86.13-1.72.5-2.37zm.87.5A3.87 3.87 0 0011 13.5c0 .8.13 1.44.37 1.87.23.4.57.63 1.13.63.57 0 .9-.23 1.13-.63.25-.43.37-1.08.37-1.87 0-.8-.12-1.44-.37-1.87-.22-.4-.56-.63-1.13-.63-.56 0-.9.23-1.13.63zM8 10.5a.5.5 0 00-.78-.42l-1.5 1a.5.5 0 00.56.84l.72-.49v5.07a.5.5 0 001 0v-6z" />
		</svg>
	)
}
export default SkipForward10Icon
