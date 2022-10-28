import Spinner from "./Spinner";

const Preloader = (props) => {
  return (
    <div id={props.preload ? "preloader" : "preloader-none"}>
      <Spinner />
    </div>
  );
};

export default Preloader;
