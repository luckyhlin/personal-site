import Layout from "../components/layout";
import styles from "../styles/sudoku.module.css";
import {useState} from "react";

function Board({board}) {
    return (
        <div className={styles.board}>
            {board.map(row => (
                    <div className={styles.boardCol}>{
                        row.map(elem => (
                            <div className={styles.boardElem}>
                                {elem.number}
                            </div>
                        ))
                    }</div>
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

class Element {
    constructor(number = 0, candidates = new Set()) {
        this.number = number
        this.candidates = candidates
    }

    toggleCandidate(cand) {
        if (this.candidates.has(cand)) {
            this.candidates.delete(cand)
        } else {
            this.candidates.add(cand)
        }
    }
}

export default function Sudoku() {
    const initBoard = Array.from({length: 9},
        () => Array(9).fill(new Element(0))
    )
    const [board, setBoard] = useState(initBoard)
    const newBoardToggle = () => setBoard(() => {
        let b = initBoard.map(row => [...row]);
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        b[row][col] = new Element(Math.floor(Math.random() * 9) + 1);
        return b;
    })
    return (
        <Layout>
            <Board board={board}/>
            <NewBoardBtn toggle={newBoardToggle}/>
        </Layout>
    )
}