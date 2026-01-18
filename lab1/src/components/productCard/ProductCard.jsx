import styles from './ProductCard.module.css';

export default function ProductCard({ image, name, price }) {
  return (
    <div className={styles.productCard}>
      <img src={image} alt={name} className={styles.productImage} />

      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>{price.toLocaleString()}₫</p>

        <button className={styles.addBtn}>Add to cart</button>
      </div>
    </div>
  );
}