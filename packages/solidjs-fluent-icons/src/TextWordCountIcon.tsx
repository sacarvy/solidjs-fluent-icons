import { splitProps, ComponentProps, JSX } from "solid-js"

function TextWordCountIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zm0 5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5zM7.6 13c-.62 0-1.1.55-1.1 1.14a.5.5 0 01-1 0 2.14 2.14 0 013.91-1.2c.4.63.43 1.45-.05 2.27-.25.41-.58.73-.92 1l-.5.37-.07.05-.4.3c-.44.32-.76.64-.9 1.07h2.6a.5.5 0 010 1H6a.5.5 0 01-.5-.5c0-1.2.7-1.87 1.36-2.38l.43-.3.07-.06c.16-.11.32-.22.46-.34.3-.23.52-.45.67-.72.32-.54.25-.95.08-1.21A1.16 1.16 0 007.6 13zm4.48.27a.99.99 0 00-.29.46.5.5 0 11-.96-.28c.08-.26.25-.63.59-.93.34-.3.84-.52 1.5-.52 1.34 0 2.1.98 2.1 1.86 0 .36-.06.9-.43 1.36-.07.09-.15.17-.24.25a1.66 1.66 0 01.67 1.4c0 .72-.24 1.28-.67 1.65-.42.36-.95.48-1.43.48-.46 0-.9-.08-1.28-.32a2 2 0 01-.8-1.12.5.5 0 11.95-.3c.1.32.24.49.4.58.15.1.38.16.73.16.32 0 .6-.08.78-.24.17-.14.32-.4.32-.9a.73.73 0 00-.12-.44.79.79 0 00-.31-.25c-.3-.14-.68-.17-.94-.17a.5.5 0 110-1c.7 0 1.01-.22 1.16-.4.16-.21.21-.49.21-.74 0-.32-.3-.86-1.1-.86-.43 0-.69.13-.84.27zm-9.06 1.1a4.8 4.8 0 01-.85.73.5.5 0 11-.56-.83 3.46 3.46 0 001.42-1.88s.11-.39.46-.39c.5 0 .53.5.53.5v6a.5.5 0 01-1 0v-4.14zm13 .13c0-.28.21-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default TextWordCountIcon
