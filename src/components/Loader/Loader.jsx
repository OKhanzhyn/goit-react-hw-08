import { Blocks } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
    return (
    <div className={css.loaderWrap}><Blocks
        height= "40"
        width="40"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        visible={true}
        />
        </div>);
};
export default Loader;
