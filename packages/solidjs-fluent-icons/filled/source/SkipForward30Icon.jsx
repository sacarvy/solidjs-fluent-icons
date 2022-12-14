import { splitProps } from "solid-js"
function SkipForward30Icon(props) {
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
			<path d="M15.73 5.63V3.75a.75.75 0 011.5 0v3.5c0 .41-.33.75-.75.75h-4a.75.75 0 010-1.5h2.03a6.3 6.3 0 00-4.78-2.25 6.45 6.45 0 00-5.65 3.54.83.83 0 01-.73.46c-.54 0-.91-.53-.67-1.01a7.93 7.93 0 017.05-4.49c2.4 0 4.54 1.12 6 2.88zM4.97 10.72a.75.75 0 001.06 1.07v-.01l.07-.06a2.3 2.3 0 011.4-.47c.55 0 .87.15 1.04.3.16.13.22.29.22.43-.01.24-.26.77-1.26.77a.75.75 0 000 1.5c1 0 1.25.53 1.26.77 0 .14-.06.3-.22.44-.17.14-.49.29-1.04.29a2.3 2.3 0 01-1.47-.53.75.75 0 00-1.06 1.06c-.28-.28 0 0 0 0l.02.02a2.03 2.03 0 00.18.16 3.8 3.8 0 002.33.8c.82-.01 1.51-.24 2.01-.66a2.05 2.05 0 00.07-3.1 2.05 2.05 0 00-.07-3.1 3.05 3.05 0 00-2.01-.65 3.8 3.8 0 00-2.5.95l-.02.01zM16 13.5c0 2.07-.62 3.75-2.5 3.75-1.87 0-2.5-1.68-2.5-3.75 0-2.07.63-3.75 2.5-3.75 1.88 0 2.5 1.68 2.5 3.75zm-1.5 0c0-.93-.15-1.56-.35-1.9a.67.67 0 00-.23-.26.8.8 0 00-.42-.09.8.8 0 00-.42.09.67.67 0 00-.23.26c-.2.34-.35.97-.35 1.9 0 .93.15 1.56.35 1.9.08.16.17.23.23.26a.8.8 0 00.42.09.8.8 0 00.42-.09c.06-.03.15-.1.23-.26.2-.34.35-.97.35-1.9z" />
		</svg>
	)
}
export default SkipForward30Icon
