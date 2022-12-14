import { splitProps } from "solid-js"
function PasswordIcon(props) {
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
			<path d="M7.85 8.15a.5.5 0 00-.7 0l-.65.64-.65-.64a.5.5 0 10-.7.7l.64.65-.64.65a.5.5 0 00.7.7l.65-.64.65.64a.5.5 0 00.7-.7l-.64-.65.64-.65a.5.5 0 000-.7zm3.3 0a.5.5 0 01.7.7l-.64.65.64.65a.5.5 0 01-.7.7l-.65-.64-.65.64a.5.5 0 01-.7-.7l.64-.65-.64-.65a.5.5 0 11.7-.7l.65.64.65-.64zM13.5 10a.5.5 0 000 1h2a.5.5 0 000-1h-2zM4.75 4A2.75 2.75 0 002 6.75v5.5A2.75 2.75 0 004.75 15h10.5A2.75 2.75 0 0018 12.25v-5.5A2.75 2.75 0 0015.25 4H4.75zM3 6.75C3 5.78 3.78 5 4.75 5h10.5c.97 0 1.75.78 1.75 1.75v5.5c0 .97-.78 1.75-1.75 1.75H4.75C3.78 14 3 13.22 3 12.25v-5.5z" />
		</svg>
	)
}
export default PasswordIcon
