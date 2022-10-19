import Label from '../UI/Label/Label';
import styles from './PlayerList.module.css';

const PlayerList = (props) => {
    console.log(props.players);
    return (
        <div className={styles.playerList}>
            {props.players?.map((player) => (
                <Label className={styles.listItem} key={player.id}>
                    {player.name}
                </Label>
            ))}
        </div>
    );
};

export default PlayerList;
