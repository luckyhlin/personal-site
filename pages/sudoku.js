import Layout from "../components/layout";
import styles from "../styles/sudoku.module.css";
import {useState} from "react";

function Board({board}) {
    return (
        <div className={styles.board}>
            {board.map(elem => (
                <div>{elem}</div>
                )
            )}
        </div>
    )
}

function NewBoardBtn({toggle}) {
    return (
        <button className={styles.newBoardBtn}
            onClick={toggle}>
            New Board
        </button>
    )
}

export default function Sudoku() {
    const initBoard = Array.from({length: 9},
        () => Array(9).fill(0)
    )
    const [board, setBoard] = useState(initBoard)
    const newBoardToggle = () => setBoard(() => {
        let b = initBoard
        const row = Math.floor(Math.random() * 9)
        const col = Math.floor(Math.random() * 9)
        b[row][col] = Math.floor(Math.random() * 9) + 1
        return b
    })
    return (
        <Layout>
            <Board board={board}/>
            <NewBoardBtn toggle={newBoardToggle}/>
        </Layout>
    )
}