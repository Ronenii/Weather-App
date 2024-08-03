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
    <button
      className={`${styles.button} ${buttonClassName}`}
      style={buttonStyle}
      onClick={onButtonClick}
    >
      <img src={imageUrl} className={styles.image} alt="" />
    </button>
  );
}
