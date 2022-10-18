import Loader from "./Loader";

const Preloader = (props) => {
  return (
    <div id={props.preload ? "preloader" : "preloader-none"}>
      <Loader />
    </div>
  );
};

export default Preloader;
