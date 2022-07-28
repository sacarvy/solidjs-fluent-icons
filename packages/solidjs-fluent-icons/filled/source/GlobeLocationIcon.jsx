import { splitProps } from "solid-js"
function GlobeLocationIcon(props) {
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
			<path d="M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 002.8 6.5h3.5c.18-1 .44-1.92.76-2.7zm5.88 0a7.19 7.19 0 00-.83-1.52A8.02 8.02 0 0117.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7zm.91 3.7h3.75c.24.71.37 1.47.4 2.25a4.52 4.52 0 00-4-.5c-.03-.6-.08-1.18-.15-1.75zM13 9.76c-.01-.79-.07-1.55-.16-2.26H7.16a19.44 19.44 0 000 5h3.98c.27-1.13.93-2.1 1.86-2.74zm-2 3.74H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52.3 0 .65-.15 1-.52.26-.26.5-.61.74-1.06A5.94 5.94 0 0111 13.5zm-8.2 0c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 01-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8zm3.35-1H2.4a8 8 0 010-5h3.75a20.52 20.52 0 000 5zM19 13.68c0-2.03-1.47-3.68-3.5-3.68-2.03 0-3.5 1.65-3.5 3.68 0 1.53.98 3.53 3.26 5.24.14.1.34.1.49 0 2.27-1.7 3.25-3.71 3.25-5.24zm-2-.18a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
		</svg>
	)
}
export default GlobeLocationIcon
