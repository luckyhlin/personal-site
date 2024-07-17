import styles from "./blog-summary.module.scss";

export default function BlogInfo({metaInfo, isDetail}) {
    const {tags, conf_level, parsed_last_edited_time, parsed_created_time} = metaInfo;
    return (
        <div className={styles.metaInfoContainer}>
            {
                tags &&
                    <div className={styles.tagContainer}>
                        {tags.map((tag) =>
                            <div className={styles["tag".concat(tag.color)]} key={tag.name}>
                                {tag.name}
                            </div>
                        )}
                    </div>
            }
            {
                conf_level &&
                <div className={styles["confLevel".concat(conf_level.slice(-3, -2))]}>
                    {conf_level}
                </div>
            }
            <div className={styles.summaryLastEditedTime}>
                {
                    parsed_last_edited_time === parsed_created_time ?
                        parsed_created_time :
                        "edited ".concat(
                            parsed_last_edited_time,
                            isDetail ? " (created ".concat(parsed_created_time,")") : "")
                }
            </div>
        </div>
    )
}