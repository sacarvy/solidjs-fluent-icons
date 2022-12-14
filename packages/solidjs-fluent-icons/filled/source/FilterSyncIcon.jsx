import { splitProps } from "solid-js"
function FilterSyncIcon(props) {
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
			<path d="M10 5.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H15a.5.5 0 010-1h.47a1.98 1.98 0 00-1.72-.1 2 2 0 00-.66.44.5.5 0 11-.71-.71A3 3 0 0116 3.15V3c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 0113 7.85V8a.5.5 0 01-1 0V6.5c0-.28.22-.5.5-.5H14a.5.5 0 010 1h-.47a1.98 1.98 0 001.72.1 2 2 0 00.66-.44.5.5 0 11.71.71 3 3 0 01-1 .66zM14 10.98a5.46 5.46 0 01-2.27-.73H4.75a.75.75 0 000 1.5h8.5a.75.75 0 00.75-.77zM9.37 7.5c-.18-.47-.3-.98-.35-1.5H2.75a.75.75 0 000 1.5h6.62zm1.88 7a.75.75 0 010 1.5h-4.5a.75.75 0 010-1.5h4.5z" />
		</svg>
	)
}
export default FilterSyncIcon
