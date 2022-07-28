import { splitProps, ComponentProps, JSX } from "solid-js"

function LassoIcon(props: ComponentProps<"svg"> & { hidden?: boolean }): JSX.Element {
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
			<path d="M8.16 2.21a8.02 8.02 0 013.68 0 .5.5 0 01-.23.98 7.02 7.02 0 00-3.22 0 .5.5 0 01-.23-.98zM6.48 3.36a.5.5 0 01-.16.68 7.04 7.04 0 00-2.28 2.28.5.5 0 11-.85-.53 8.04 8.04 0 012.6-2.6.5.5 0 01.7.17zm7.04 0a.5.5 0 01.69-.17 8.04 8.04 0 012.6 2.6.5.5 0 01-.85.53 7.04 7.04 0 00-2.28-2.28.5.5 0 01-.16-.68zM2.82 7.79a.5.5 0 01.37.6 7.02 7.02 0 000 3.22.5.5 0 01-.98.23 8.02 8.02 0 010-3.68.5.5 0 01.6-.37zm14.37 0a.5.5 0 01.6.37 8.03 8.03 0 010 3.68.5.5 0 01-.98-.23 7.02 7.02 0 000-3.22.5.5 0 01.38-.6zM3.36 13.52a.5.5 0 01.68.16c.58.92 1.36 1.7 2.28 2.28a.5.5 0 11-.53.85 8.04 8.04 0 01-2.6-2.6.5.5 0 01.17-.7zm13.57.73a.5.5 0 10-.86-.5l-.02.03a3.6 3.6 0 01-.32.46 7.8 7.8 0 01-1.16 1.22A6.55 6.55 0 0010.5 14c-1.52 0-2.49.9-2.49 2s.97 2 2.49 2a7.1 7.1 0 004.03-1.26 8.6 8.6 0 011.5 1.95l.02.03a.5.5 0 10.9-.44s-.13-.24 0 0l-.01-.02a3.37 3.37 0 00-.1-.18 9.6 9.6 0 00-1.49-1.93l-.02-.03a8.8 8.8 0 001.6-1.86.9.9 0 010-.01zM10.5 15c1.3 0 2.38.46 3.23 1.07-.85.53-1.93.93-3.23.93-1.13 0-1.49-.6-1.49-1s.36-1 1.49-1z" />
		</svg>
	)
}
export default LassoIcon
