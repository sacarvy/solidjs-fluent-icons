import { splitProps } from "solid-js"
function CurrencyDollarRupeeIcon(props) {
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
			<path d="M6.25 2.75a.75.75 0 10-1.5 0v.33A3.5 3.5 0 002 6.5v.28c0 1.47.85 2.8 2.17 3.42l.58.27v4.87a2 2 0 01-1.25-1.86V12.4a.75.75 0 00-1.5 0v1.08a3.5 3.5 0 002.75 3.42v.35a.75.75 0 001.5 0v-.35A3.5 3.5 0 009 13.48v-.27c0-1.46-.84-2.8-2.17-3.42l-.58-.27V4.64A2 2 0 017.5 6.5v1.1a.75.75 0 001.5 0V6.5a3.5 3.5 0 00-2.75-3.42v-.33zm-1.5 1.9v4.17A2.28 2.28 0 013.5 6.78V6.5a2 2 0 011.25-1.86zm1.5 6.53a2.27 2.27 0 011.25 2.03v.27a2 2 0 01-1.25 1.86v-4.16zM10.75 3a.75.75 0 000 1.5h2.75c.88 0 1.65.5 2.02 1.25h-4.77a.75.75 0 000 1.5h4.94A2.25 2.25 0 0113.5 9h-2.75a.75.75 0 00-.57 1.24l6.5 7.5a.75.75 0 101.14-.98l-5.43-6.26h1.11c1.9 0 3.47-1.42 3.72-3.25h.03a.75.75 0 000-1.5h-.13a3.74 3.74 0 00-.62-1.25h.75a.75.75 0 000-1.5h-6.5z" />
		</svg>
	)
}
export default CurrencyDollarRupeeIcon
