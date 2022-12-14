import { splitProps } from "solid-js"
function Fps240Icon(props) {
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
			<path d="M2.99 4.38a.75.75 0 01-1.48-.25v-.05a1.92 1.92 0 01.1-.32A2.7 2.7 0 014.25 2c.96 0 1.73.38 2.22 1 .48.61.65 1.4.52 2.13-.14.81-.6 1.3-1.15 1.63a6.71 6.71 0 01-1.48.59c-.45.16-.76.33-.98.57-.11.13-.22.3-.3.58h3.17a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75c0-1.01.27-1.77.76-2.33.48-.53 1.09-.8 1.59-.98l.45-.16c.32-.1.56-.2.79-.32.24-.14.37-.3.42-.59a1.2 1.2 0 00-.22-.94c-.18-.23-.5-.43-1.04-.43-.62 0-.9.25-1.06.45a1.25 1.25 0 00-.2.43zm0 0zm0 0zM16.5 2A2.5 2.5 0 0014 4.5v3a2.5 2.5 0 005 0v-3A2.5 2.5 0 0016.5 2zm1 5.5a1 1 0 11-2 0v-3a1 1 0 112 0v3zM3.5 12a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1.5a.5.5 0 000-1H4v-2h2.5a.5.5 0 000-1h-3zm5 0a.5.5 0 00-.5.5v5a.5.5 0 001 0V16h1a2 2 0 100-4H8.5zm.5 3v-2h1a1 1 0 110 2H9zm4-1.25c0-.97.78-1.75 1.75-1.75h.76c.82 0 1.49.67 1.49 1.49v.01a.5.5 0 01-1 0v-.01a.49.49 0 00-.49-.49h-.76a.75.75 0 000 1.5h.5a1.75 1.75 0 110 3.5h-.76c-.82 0-1.49-.67-1.49-1.49v-.01a.5.5 0 011 0v.01c0 .27.22.49.49.49h.76a.75.75 0 000-1.5h-.5c-.97 0-1.75-.78-1.75-1.75zM8.75 2c.41 0 .75.34.75.75V5.5H11V2.75a.75.75 0 011.5 0V9.5a.75.75 0 01-1.5 0V7H8.75A.75.75 0 018 6.25v-3.5c0-.41.34-.75.75-.75zM2.99 4.38z" />
		</svg>
	)
}
export default Fps240Icon
