import spiningLoading from "../Images/spinning-loading.gif";

const Spinner = () => {
  return (
    <div className="text-center mt-5">
      <img src={spiningLoading} alt="Loading..." style={{ width: "150px" }} />;
    </div>
  );
};

export default Spinner;
