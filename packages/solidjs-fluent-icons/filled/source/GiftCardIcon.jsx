import { splitProps } from "solid-js"
function GiftCardIcon(props) {
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
			<path d="M7 4H4.75A2.75 2.75 0 002 6.75V9h2.27A2 2 0 017 6.27V4zm1 4v1h1a1 1 0 10-1-1zm2.73 1A2 2 0 008 6.27V4h7.25A2.75 2.75 0 0118 6.75V9h-7.27zm-2.02 1l1.64 1.65a.5.5 0 01-.7.7L8 10.71V16h7.25A2.75 2.75 0 0018 13.25V10H8.7zM7 16v-5.3l-1.65 1.65a.5.5 0 01-.7-.7L6.29 10H2v3.25A2.75 2.75 0 004.75 16H7zm0-8a1 1 0 10-1 1h1V8z" />
		</svg>
	)
}
export default GiftCardIcon
