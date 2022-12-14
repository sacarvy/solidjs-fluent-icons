import { splitProps } from "solid-js"
function GiftCardMoneyIcon(props) {
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
			<path d="M7 2H4.75A2.75 2.75 0 002 4.75V7h2.27A2 2 0 017 4.27V2zm1 4v1h1a1 1 0 10-1-1zm2.73 1A2 2 0 008 4.27V2h7.25A2.75 2.75 0 0118 4.75V7h-7.27zM8.71 8l1.64 1.65a.5.5 0 01-.7.7L8 8.71V14h1v-.5a2.5 2.5 0 012.5-2.5h6c.17 0 .34.02.5.05V8H8.7zM7 14V8.7l-1.65 1.65a.5.5 0 01-.7-.7L6.29 8H2v3.25A2.75 2.75 0 004.75 14H7zm0-8a1 1 0 10-1 1h1V6zm12 7.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5zm-.5-3.5h-1c0 .83.67 1.5 1.5 1.5v-1a.5.5 0 01-.5-.5zm-6 0a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
		</svg>
	)
}
export default GiftCardMoneyIcon
