import { splitProps } from "solid-js"
function ArrowUploadIcon(props) {
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
			<path d="M4.5 2a.75.75 0 000 1.5H15A.75.75 0 0015 2H4.5zm6 15.35a.75.75 0 01-1.5-.1V7.05l-2.97 2.98-.08.07a.75.75 0 01-.98-1.14l4.29-4.28a.73.73 0 01.26-.15l.08-.02.15-.02h.06l.07.01.12.03.09.04.04.02.09.06.07.06 4.24 4.26.07.08c.22.3.2.71-.07.98l-.08.07c-.3.22-.72.2-.98-.07L10.5 7.05V17.35z" />
		</svg>
	)
}
export default ArrowUploadIcon
