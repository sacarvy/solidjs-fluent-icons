import { splitProps } from "solid-js"
function GiftCardArrowRightIcon(props) {
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
			<path d="M7 2H4.75A2.75 2.75 0 002 4.75V7h2.27A2 2 0 017 4.27V2zM2 8v3.25A2.75 2.75 0 004.75 14H7V8.7l-1.65 1.65a.5.5 0 01-.7-.7L6.29 8H2zm6 6h1.02A5.5 5.5 0 0118 10.26V8H8.7l1.65 1.65a.5.5 0 01-.7.7L8 8.71V14zm10-7h-7.27A2 2 0 008 4.27V2h7.25A2.75 2.75 0 0118 4.75V7zM8 7V6a1 1 0 111 1H8zM7 7H6a1 1 0 111-1v1zm12 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" />
		</svg>
	)
}
export default GiftCardArrowRightIcon
