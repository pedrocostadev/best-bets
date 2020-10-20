import React from 'react';
import styles from './WorldPlayerTag.module.css';

interface Props {
  playerName: string;
}

// TODO: Adicionar icone da bola de ouro???

const WorldPlayerTag: React.FC<Props> = ({ playerName }: Props) => (
  <span className={styles.tag}>{playerName}</span>
);

export default React.memo(WorldPlayerTag);
