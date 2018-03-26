import { Hello, IHelloProps } from "../components/Hello";
import * as actions from "../actions/";
import { StoreState } from "../types/index";
import { connect, Dispatch } from "react-redux";

// export const mapStateToHelloProps = ({ enthusiasmLevel, languageName }: StoreState) => {
//     return {
//         enthusiasmLevel,
//         name: languageName,
//         // languageName,
//     };
// }
export function mapStateToHelloProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
        enthusiasmLevel,
        name: languageName,
    }
}

// export const mapDispatchToHelloProps = (dispatch: Dispatch<actions.EnthusiasmAction>) => {
//     return {
//         onIncrement: () => dispatch(actions.incrementEnthusiasm()),
//         onDecrement: () => dispatch(actions.decrementEnthusiasm()),
//     };
// }

export function mapDispatchToHelloProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
        onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
}

export default connect<{}, {}, IHelloProps>(mapStateToHelloProps, mapDispatchToHelloProps)(Hello);