import { splitProps, ComponentProps, JSX } from "solid-js"

function SquareHintSparklesIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M14.88.28l.35 1.07a2.2 2.2 0 001.4 1.4l1.07.35h.02a.42.42 0 010 .8l-1.07.35a2.2 2.2 0 00-1.4 1.4l-.35 1.07a.42.42 0 01-.8 0l-.35-1.07a2.23 2.23 0 00-1.4-1.4l-1.07-.35a.42.42 0 010-.8l1.07-.35a2.2 2.2 0 001.38-1.4l.35-1.07a.42.42 0 01.8 0zm4.9 7.93l-.76-.25a1.58 1.58 0 01-1-1l-.25-.76a.3.3 0 00-.57 0l-.25.77a1.58 1.58 0 01-.98 1l-.77.24a.3.3 0 000 .57l.77.25a1.58 1.58 0 011 1l.24.77a.3.3 0 00.58 0l.24-.77a1.58 1.58 0 011-1l.77-.24a.3.3 0 000-.57h-.02zM10 3.5c0-.17.04-.34.1-.5H9a.5.5 0 000 1h1.1c-.06-.16-.1-.33-.1-.5zM5.5 3a.5.5 0 010 1C4.67 4 4 4.67 4 5.5a.5.5 0 01-1 0A2.5 2.5 0 015.5 3zM14 16.5c0 .28.22.5.5.5a2.5 2.5 0 002.5-2.5.5.5 0 00-1 0c0 .83-.67 1.5-1.5 1.5a.5.5 0 00-.5.5zm-11-2a.5.5 0 011 0c0 .83.67 1.5 1.5 1.5a.5.5 0 010 1A2.5 2.5 0 013 14.5zm.5-6A.5.5 0 003 9v2a.5.5 0 001 0V9a.5.5 0 00-.5-.5zm5 8c0-.28.22-.5.5-.5h2a.5.5 0 010 1H9a.5.5 0 01-.5-.5z" />
		</svg>
	)
}
export default SquareHintSparklesIcon
