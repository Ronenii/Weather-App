import styles from "../../assets/style/cmps/global/_image-button.module.scss";

interface ImageButton {
  imageUrl: string;
  onButtonClick: () => void;
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties;
}

export default function ImageButton({
  imageUrl,
  onButtonClick,
  buttonClassName = "",
  buttonStyle = {},
}: ImageButton) {
  return (
    <div className={styles.container}>
      <img src={imageUrl} className={styles.image} />
      <br />
      <button
        onClick={onButtonClick}
        className={`${styles.button} ${buttonClassName}`}
        style={buttonStyle}
      />
    </div>
  );
}
