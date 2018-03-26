import * as React from "react";
import "./Hello.css";
// import * as actions from "../actions";

export interface IHelloProps {
    name: string;
    enthusiasmLevel?: number;
    onIncrement?: () => void
    onDecrement?: () => void;
}

const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join("!");
}

export class Hello extends React.Component<IHelloProps, {}> {
    render() {
        const { name, enthusiasmLevel = 1 } = this.props;

        if (enthusiasmLevel <= 0) {
            throw new Error("You could be a little more enthusiastic. :D");
        }

        return (
            <div className="hello">
                <div className="greeting">
                    Hello {name + getExclamationMarks(enthusiasmLevel)}
                </div>
                <div>
                    <button onClick={this.props.onDecrement}>-</button>
                    <button onClick={this.props.onIncrement}>+</button>
                </div>
            </div>
        )
    }
}

// function Hello({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: HelloProps) {
//     if (enthusiasmLevel <= 0) {
//         throw new Error('You could be a little more enthusiastic. :D');
//     }

//     return (
//         <div className="hello">
//             <div className="greeting">
//                 Hello {name + getExclamationMarks(enthusiasmLevel)}
//             </div>
//             <div>
//                 <button onClick={onDecrement}>-</button>
//                 <button onClick={onIncrement}>+</button>
//             </div>
//         </div>
//     );
// }

// export default Hello