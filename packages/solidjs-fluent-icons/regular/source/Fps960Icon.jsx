import { splitProps } from "solid-js"
function Fps960Icon(props) {
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
			<path d="M7 7.5a2.5 2.5 0 01-5 0 .5.5 0 011 0 1.5 1.5 0 103 0v-1a2.5 2.5 0 111-2v3zm-1-3a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM10.5 2A2.5 2.5 0 008 4.5v3a2.5 2.5 0 101-2v-1a1.5 1.5 0 113 0 .5.5 0 001 0A2.5 2.5 0 0010.5 2zm0 7a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm6-6c-.83 0-1.5.67-1.5 1.5v3a1.5 1.5 0 003 0v-3c0-.83-.67-1.5-1.5-1.5zM14 4.5a2.5 2.5 0 015 0v3a2.5 2.5 0 01-5 0v-3zM3.5 12a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H4v-2h2.5a.5.5 0 000-1h-3zm5 0a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1a2 2 0 100-4H8.5zm1.5 3H9v-2h1a1 1 0 110 2zm3-1.25c0-.97.78-1.75 1.75-1.75h.75c.83 0 1.5.67 1.5 1.5a.5.5 0 01-1 0 .5.5 0 00-.5-.5h-.75a.75.75 0 000 1.5h.5a1.75 1.75 0 110 3.5h-.75a1.5 1.5 0 01-1.5-1.5.5.5 0 011 0c0 .28.22.5.5.5h.75a.75.75 0 000-1.5h-.5c-.97 0-1.75-.78-1.75-1.75z" />
		</svg>
	)
}
export default Fps960Icon
