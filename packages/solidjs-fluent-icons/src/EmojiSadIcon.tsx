import { splitProps, ComponentProps, JSX } from "solid-js"

function EmojiSadIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.5 9.5a1 1 0 100-2 1 1 0 000 2zm6-1a1 1 0 11-2 0 1 1 0 012 0zm.06 4.89a.5.5 0 01-.7-.07A4.3 4.3 0 0010 12.25c-1.02-.01-1.75.27-2.21.55a3.09 3.09 0 00-.65.5.5.5 0 01-.78-.62l.39.31-.39-.31v-.01l.02-.02a2.07 2.07 0 01.23-.23c.15-.13.37-.31.67-.49.6-.35 1.5-.69 2.72-.69a5.3 5.3 0 012.72.7 4.06 4.06 0 01.9.71l.01.02h.01l-.39.32.39-.31a.5.5 0 01-.08.7zM10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" />
		</svg>
	)
}
export default EmojiSadIcon
