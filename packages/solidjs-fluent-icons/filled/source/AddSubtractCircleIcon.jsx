import { splitProps } from "solid-js";
function AddSubtractCircleIcon(props) {
    const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"]);
    return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display: props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M11.5 12a.5.5 0 100 1h3a.5.5 0 000-1h-3zM10 18a8 8 0 100-16 8 8 0 000 16zm0-1a6.97 6.97 0 01-4.58-1.7l9.87-9.88A7 7 0 0110 17zM5.5 7c0-.28.22-.5.5-.5h1v-1a.5.5 0 011 0v1h1a.5.5 0 110 1H8v1a.5.5 0 01-1 0v-1H6a.5.5 0 01-.5-.5z"/>
    </svg>);
}
export default AddSubtractCircleIcon;