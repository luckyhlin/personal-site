import UpdatedAt from "./updatedAt";
import Name from "./name";

export default function FootageText({ lightColor }) {
    return (
        <>
            built by <Name/> with Love
            <UpdatedAt lightColor={lightColor}/>
        </>
    )
}