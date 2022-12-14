import { splitProps } from "solid-js"
function CertificateIcon(props) {
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
			<path d="M2 5c0-1.1.9-2 2-2h12a2 2 0 012 2v3.15a4.5 4.5 0 00-1-.68V5a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1h7.26l.24.33V15H4a2 2 0 01-2-2V5zm16.5 6.5c0 .95-.38 1.82-1 2.45V18a.5.5 0 01-.8.4l-1.4-1.05a.5.5 0 00-.6 0l-1.4 1.05a.5.5 0 01-.8-.4v-4.05A3.49 3.49 0 0115 8a3.5 3.5 0 013.5 3.5zM15 15c-.54 0-1.05-.12-1.5-.34v2.09l1.24-.75a.5.5 0 01.52 0l1.24.75v-2.09c-.45.22-.96.34-1.5.34zm0-1a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM5 6.5c0-.28.22-.5.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm.5 4.5a.5.5 0 000 1h4a.5.5 0 000-1h-4z" />
		</svg>
	)
}
export default CertificateIcon
