import React from "react";
import styles from "./ImagesAndDocuments.module.css"; // Import CSS module

const ImagesAndDocuments = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Images and Documents</h1>
        <button className={styles.editButton}>
          <i className="fas fa-edit"></i> EDIT
        </button>
      </div>
      <div>
        <h2 className={styles.sectionTitle}>Images</h2>
        <div className={styles.imageGrid}>
          <div className={styles.relative}>
            <img
              src="https://storage.googleapis.com/a1aa/image/V8x65eL6UhV4P6nbLC7Sc5Xlz9VG7CqAbeubCLKLyHUsFfsnA.jpg"
              alt="doc"
              className={styles.image}
            />
            <div className={styles.label}>Profile Image</div>
          </div>
          <img
            src="https://storage.googleapis.com/a1aa/image/Dd2KfCTUJQ3PDS3eNkzui0GqpcYnUJgfchhVlnuR0lqRLeZPB.jpg"
            alt="doc"
            className={styles.image}
          />
        </div>
      </div>
      <div>
        <h2 className={styles.sectionTitle}>Documents</h2>
        <div className={styles.documentGrid}>
          <img
            src="https://storage.googleapis.com/a1aa/image/bgEwQGKQ7sKBFR3nmk5AQUnGfc9RexXZq2F367FeMIC0KeZPB.jpg"
            alt="Document"
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

export default ImagesAndDocuments;
