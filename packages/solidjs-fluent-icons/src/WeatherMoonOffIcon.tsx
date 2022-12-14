import { splitProps, ComponentProps, JSX } from "solid-js"

function WeatherMoonOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l6.6 6.61a9.1 9.1 0 01-.03.07c-.94 1.78-2.55 3.03-5.55 4.1a.6.6 0 00-.3.9 7.98 7.98 0 0012.14 1.19l2.14 2.13a.5.5 0 00.7-.7l-2.16-2.17-.71-.71-5.03-5.02-.77-.77-6.33-6.33zm11.46 12.87a6.98 6.98 0 01-10.3-.63c2.73-1.05 4.44-2.33 5.48-4.2l4.82 4.83zM12.94 3.96a6.98 6.98 0 012.6 9.46l.73.73.09-.15A7.98 7.98 0 009.88 2.04a.6.6 0 00-.61.73c.43 1.8.5 3.28.22 4.6l.83.83c.43-1.51.45-3.17.04-5.12.9.12 1.77.42 2.58.88z" />
		</svg>
	)
}
export default WeatherMoonOffIcon
