import { splitProps } from "solid-js"
function PremiumPersonIcon(props) {
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
			<path d="M5.5 2.75a.75.75 0 00-.66.39l-2.75 5c-.15.27-.11.6.08.84l7.25 8.75a.75.75 0 001.16 0l.48-.59a3.27 3.27 0 01-.06-.64c0-1.3 1-2.38 2.27-2.49a2.99 2.99 0 01.17-4.19l.32-.82h4.05l.02-.02c.2-.24.23-.57.08-.84l-2.75-5a.75.75 0 00-.66-.39h-9zM4.16 7.5l1.78-3.25h1.5L6.31 7.5H4.16zM6.14 9l1.93 4.75L4.14 9h2zM10 14.48L7.76 9h4.39l-2.16 5.48zM7.89 7.5l1.14-3.25h1.95l1.2 3.25H7.88zm5.88 0l-1.2-3.25h1.49l1.78 3.25h-2.07zM17.5 12a2 2 0 11-4 0 2 2 0 014 0zm1.5 4.5c0 1.25-1 2.5-3.5 2.5S12 17.75 12 16.5c0-.83.67-1.5 1.5-1.5h4c.83 0 1.5.67 1.5 1.5z" />
		</svg>
	)
}
export default PremiumPersonIcon
