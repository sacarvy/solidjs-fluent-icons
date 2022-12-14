import { splitProps, ComponentProps, JSX } from "solid-js"

function CookiesIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6 9a1 1 0 100-2 1 1 0 000 2zm4 2a1 1 0 100-2 1 1 0 000 2zm3 3a1 1 0 11-2 0 1 1 0 012 0zm-6 0a1 1 0 100-2 1 1 0 000 2zm3-12a8 8 0 107.87 6.56.5.5 0 00-.87-.24A2 2 0 0113.5 7c0-.26-.18-.5-.44-.55a2 2 0 01-.95-3.38.5.5 0 00-.24-.85A8.02 8.02 0 0010 2zm-7 8a7 7 0 017.87-6.95 2.99 2.99 0 001.65 4.29 3 3 0 004.47 2.26l.01.4a7 7 0 11-14 0z" />
		</svg>
	)
}
export default CookiesIcon
