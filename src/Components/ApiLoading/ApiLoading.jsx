import { useSelector } from "react-redux";
import Loading from "../../page/Loading/Loading";

function ApiLoading() {
    const isLoading = useSelector(state => state.loading.isLoading);
  return (
    <>
        {
        isLoading
        ?
        <Loading/>
        :null
         }
    </>
  )
}

export default ApiLoading;