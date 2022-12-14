import { splitProps } from "solid-js"
function Fps30Icon(props) {
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
			<path d="M12.5 2A2.5 2.5 0 0010 4.5v3a2.5 2.5 0 005 0v-3A2.5 2.5 0 0012.5 2zm0 7A1.5 1.5 0 0111 7.5v-3a1.5 1.5 0 013 0v3c0 .83-.67 1.5-1.5 1.5zm-9 3a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H4v-2h2.5a.5.5 0 000-1h-3zm5 0a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1a2 2 0 100-4H8.5zm1.5 3H9v-2h1a1 1 0 110 2zm3-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 01-1 0v-.01a.49.49 0 00-.49-.49h-.76a.75.75 0 000 1.5h.5a1.75 1.75 0 110 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 011 0v.01c0 .27.22.49.49.49h.76a.75.75 0 000-1.5h-.5c-.97 0-1.75-.78-1.75-1.75zM6.75 3h-.5c-.49 0-.91.28-1.12.69-.08.17-.24.31-.44.31-.36 0-.65-.32-.5-.65A2.25 2.25 0 016.25 2h.5a2.25 2.25 0 011.41 4 2.25 2.25 0 01-1.41 4h-.5c-.92 0-1.71-.55-2.06-1.35-.15-.33.14-.65.5-.65.2 0 .36.14.44.31.2.41.63.69 1.12.69h.5a1.25 1.25 0 000-2.5H6.5a.5.5 0 010-1h.25a1.25 1.25 0 000-2.5z" />
		</svg>
	)
}
export default Fps30Icon
