import { splitProps, ComponentProps, JSX } from "solid-js"

function ShoppingBagArrowLeftIcon(
	props: ComponentProps<"svg"> & { hidden?: boolean },
): JSX.Element {
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
			<path d="M15 6a1 1 0 011 1v2.2c-.32-.08-.66-.15-1-.18V7h-3v2.6c-.36.18-.7.4-1 .66V7H5v8a1.98 1.98 0 001.23 1.84c.24.1.5.16.77.16h2.6c.18.36.4.7.66 1H7a3 3 0 01-3-3V7a1 1 0 011-1h1V4.5a2.42 2.42 0 01.73-1.77A2.43 2.43 0 018.5 2a2.43 2.43 0 011.5.5 2.44 2.44 0 012.48-.3 2.53 2.53 0 011.32 1.33c.13.3.2.63.2.97V6h1zm-2-1.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 0011.5 3c-.3 0-.58.09-.83.26A2.5 2.5 0 0111 4.5V6h2V4.5zM7 6h3V4.5a1.47 1.47 0 00-.44-1.06A1.48 1.48 0 008.5 3a1.47 1.47 0 00-1.06.44A1.48 1.48 0 007 4.5V6zm7.5 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-2.36-4.85l2-2a.5.5 0 01.71.7L13.71 14h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 01-.15-.35.5.5 0 01.14-.35z" />
		</svg>
	)
}
export default ShoppingBagArrowLeftIcon
