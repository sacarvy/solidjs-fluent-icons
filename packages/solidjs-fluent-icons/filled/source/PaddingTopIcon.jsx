import { splitProps } from "solid-js"
function PaddingTopIcon(props) {
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
			<path d="M3.75 2.75c0-.41.34-.75.75-.75h1.31a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm3.94 0c0-.41.33-.75.75-.75h2.62a.75.75 0 010 1.5H8.44a.75.75 0 01-.75-.75zm5.25 0c0-.41.33-.75.75-.75H15a.75.75 0 010 1.5h-1.31a.75.75 0 01-.75-.75zm-9.19 14.5c0-.41.34-.75.75-.75H15a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zm6.53-12.53a.75.75 0 00-1.06 0L4.97 8.97a.75.75 0 101.06 1.06L9 7.06v7.19a.75.75 0 001.5 0V7.06l2.97 2.97a.75.75 0 101.06-1.06l-4.25-4.25z" />
		</svg>
	)
}
export default PaddingTopIcon
