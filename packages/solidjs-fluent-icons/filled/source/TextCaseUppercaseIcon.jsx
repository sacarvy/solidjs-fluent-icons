import { splitProps } from "solid-js"
function TextCaseUppercaseIcon(props) {
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
			<path d="M6.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 11-1.41.5l-.78-2.25H4.06l-.86 2.27a.75.75 0 01-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48zM4.62 11h3.5L6.45 6.2 4.63 11zM12 3.5a.75.75 0 00-.75.75V14.5c0 .41.34.75.75.75h2.75a3.5 3.5 0 001.71-6.55 3.12 3.12 0 00-2.34-5.2H12zm3.75 3.13c0 .9-.73 1.62-1.63 1.62h-1.37V5h1.38c.9 0 1.62.73 1.62 1.63zm-1 7.12h-2v-4h2a2 2 0 110 4z" />
		</svg>
	)
}
export default TextCaseUppercaseIcon
