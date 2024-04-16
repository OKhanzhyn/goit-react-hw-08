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

// import { TailSpin } from "react-loader-spinner";

// const Loader = () => {
//   return (
//     <div>
//       <TailSpin
//         visible={true}
//         height="80"
//         width="80"
//         color="#4fa94d"
//         ariaLabel="tail-spin-loading"
//         radius="1"
//         wrapperStyle={{}}
//         wrapperClass=""
//       />
//     </div>
//   );
// };

// export default Loader;