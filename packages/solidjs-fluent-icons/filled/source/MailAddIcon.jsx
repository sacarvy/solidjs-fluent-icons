import { splitProps } from "solid-js"
function MailAddIcon(props) {
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
			<path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V5h-1.5a.5.5 0 000 1H14v1.5a.5.5 0 001 0V6h1.5a.5.5 0 000-1H15V3.5zm-.5 7.5c1.33 0 2.55-.47 3.5-1.26v4.76a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0l2.23-1.31c.63.24 1.3.38 2.02.38zm-10-7h4.7a5.5 5.5 0 002.24 6.07l-1.44.85-7.98-4.7A2.5 2.5 0 014.5 4z" />
		</svg>
	)
}
export default MailAddIcon
