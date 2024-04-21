import React from "react";
import styles from "./Modal.module.css";

interface CustomModalProps {
    mainText: string;
    minorText: string;
    buttonText: string;
    onButtonClick: () => void;
}

function CustomModal({ mainText, minorText, buttonText, onButtonClick }: CustomModalProps) {
    return (
        <div className={`modal fade show ${styles.modalContainer}`} style={{ display: "block" }}>
            <div className={`modal-dialog modal-dialog-centered modal-sm`}>
                <div className={`modal-content ${styles.modalContent}`}>
                    <div className="modal-body text-center">
                        <img
                            src="/assets/success-icon.png"
                            alt="Congratulations Icon" width={100}/>

                        <h5 className={`${styles.mainText} mt-4`}>{mainText}</h5>
                        <p className={`${styles.minorText} mt-1`}>{minorText}</p>

                        <button
                            type="button"
                            className={`${styles.customButton} mt-2 btn btn-primary btn-block`}
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomModal;
