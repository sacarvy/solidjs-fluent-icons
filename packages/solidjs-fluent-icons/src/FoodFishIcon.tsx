import { splitProps, ComponentProps, JSX } from "solid-js"

function FoodFishIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.91 9.35c-.04-1.76.24-3.76 1.43-4.95.7-.7 1.66-1.08 2.71-1.26a11.7 11.7 0 013.06-.07c.98.09 1.73.84 1.82 1.82.09.9.11 2-.07 3.06a4.97 4.97 0 01-1.26 2.71c-1.19 1.2-3.19 1.47-4.95 1.43a1.4 1.4 0 00-1.43 1.3c-.1 1.47-.4 3.17-1.11 4.52-.04.07-.07.08-.08.09a.1.1 0 01-.06 0c-.07-.02-.16-.1-.2-.25-.13-.7-.3-1.54-.53-2.28a8.35 8.35 0 00-.38-1.03c-.13-.3-.3-.58-.5-.8-.21-.2-.5-.36-.8-.5-.3-.14-.66-.27-1.03-.38-.74-.22-1.57-.4-2.28-.54-.16-.03-.23-.13-.25-.2a.1.1 0 010-.06c.01 0 .03-.04.09-.07a11.53 11.53 0 014.52-1.11 1.4 1.4 0 001.3-1.43zm.72-5.66c-1.5 1.5-1.76 3.88-1.72 5.68a.4.4 0 01-.37.41c-1.52.1-3.39.41-4.92 1.23-.52.27-.7.8-.58 1.27.12.45.5.83 1.02.92.7.14 1.5.3 2.18.52.35.1.65.21.9.33.26.12.42.22.5.3.09.09.2.25.31.5.12.26.23.57.33.9.21.7.38 1.5.51 2.19.1.52.47.9.93 1.02.47.13 1-.06 1.27-.57.82-1.54 1.12-3.4 1.23-4.93a.4.4 0 01.4-.37c1.8.05 4.19-.22 5.69-1.72.89-.9 1.33-2.08 1.54-3.25.2-1.17.17-2.37.08-3.32a3 3 0 00-2.73-2.73 12.7 12.7 0 00-3.32.08c-1.17.2-2.35.65-3.25 1.54zm4.62.8a.75.75 0 110 1.51.75.75 0 010-1.5z" />
		</svg>
	)
}
export default FoodFishIcon
