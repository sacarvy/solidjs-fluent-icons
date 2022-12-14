import { splitProps, ComponentProps, JSX } from "solid-js"

function EmojiLaughIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M6.5 8.08c.04-.3.33-.58.75-.58.41 0 .7.28.75.58A.5.5 0 109 7.92 1.73 1.73 0 007.25 6.5c-.86 0-1.62.59-1.74 1.42a.5.5 0 10.98.16zm6.25-.58c-.42 0-.71.28-.76.58a.5.5 0 01-.98-.16c.12-.83.88-1.42 1.74-1.42.85 0 1.61.59 1.74 1.42a.5.5 0 01-.99.16c-.04-.3-.34-.58-.75-.58zM5.5 10a.5.5 0 00-.5.55A4.86 4.86 0 0010 15c2.84 0 4.75-2 5-4.45a.5.5 0 00-.5-.55h-9zm4.5 4a3.85 3.85 0 01-3.92-3h7.83c-.4 1.7-1.83 3-3.91 3zm0-12a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" />
		</svg>
	)
}
export default EmojiLaughIcon
