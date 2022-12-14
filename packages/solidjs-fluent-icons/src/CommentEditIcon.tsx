import { splitProps, ComponentProps, JSX } from "solid-js"

function CommentEditIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M17 8.13V5.57C17 4.7 16.3 4 15.4 4H4.6C3.7 4 3 4.71 3 5.57v6.7c0 .86.7 1.57 1.6 1.57h1.6V17l2.17-1.6-.31 1.25-.05.26-1.21.9a1 1 0 01-1.4-.2.98.98 0 01-.2-.6v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h10.8C16.84 3 18 4.15 18 5.57v3.12c-.3-.26-.64-.44-1-.56zm-2.2 1.42l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.07 1.07l1.5-.37c.39-.1.74-.3 1.02-.58l4.83-4.83a1.87 1.87 0 10-2.64-2.64z" />
		</svg>
	)
}
export default CommentEditIcon
