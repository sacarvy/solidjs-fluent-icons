import { splitProps, ComponentProps, JSX } from "solid-js"

function ChatDismissIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M7.85 7.15a.5.5 0 10-.7.7L9.29 10l-2.14 2.15a.5.5 0 00.7.7L10 10.71l2.15 2.14a.5.5 0 00.7-.7L10.71 10l2.14-2.15a.5.5 0 00-.7-.7L10 9.29 7.85 7.15zM18 10a8 8 0 10-16 0v.35l.03.38c.1 1.01.38 1.99.83 2.89l.06.12-.9 3.64-.02.08v.08c.03.3.31.52.62.45l3.65-.91.12.06A8 8 0 0018 10zM3 10a7 7 0 113.58 6.1l-.09-.03-.1-.02a.5.5 0 00-.18 0l-3.02.76.75-3.02.02-.1a.5.5 0 00-.07-.27A6.97 6.97 0 013 10z" />
		</svg>
	)
}
export default ChatDismissIcon
