import { splitProps, ComponentProps, JSX } from "solid-js"

function TrophyOffIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7L3.59 4.3c-.36.28-.6.71-.6 1.2V7a3 3 0 002.62 2.97 4.5 4.5 0 003.9 3.5v1.5h-2a2 2 0 00-2 2v.5c0 .27.22.5.5.5h8a.5.5 0 00.5-.5v-.5a2 2 0 00-2-2h-2v-1.5c.6-.07 1.19-.26 1.7-.55l4.94 4.93a.5.5 0 00.7-.7l-15-15zm8.62 10.03A3.5 3.5 0 016.5 9.16V7.2l4.97 4.97zM5.5 6.2v2.72A2 2 0 014 7V5.5c0-.22.13-.4.32-.47L5.5 6.21zm8 2.79c0 .68-.2 1.31-.53 1.85l.72.72c.33-.47.58-1.01.7-1.6A3 3 0 0017 7V5.5c0-.83-.67-1.5-1.5-1.5h-.99a2 2 0 00-2-2h-5a2 2 0 00-1.92 1.46l.92.92V4a1 1 0 011-1h5a1 1 0 011 1v5zm1-4h1c.27 0 .5.22.5.5V7a2 2 0 01-1.5 1.94V5zm-8 11.97a1 1 0 011-1h5a1 1 0 011 1h-7z" />
		</svg>
	)
}
export default TrophyOffIcon
