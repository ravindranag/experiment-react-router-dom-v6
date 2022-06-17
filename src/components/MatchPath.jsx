import { useMatch } from "react-router-dom";
import NotFound from "../pages/NotFound";

const MatchPath = ({path, Comp}) => {
    
    const match = useMatch(path)
    return match ? <Comp {...match} /> : <NotFound />
}
 
export default MatchPath