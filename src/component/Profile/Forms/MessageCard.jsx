import React from "react";
import style from "./Form.module.css";

import { AiOutlineClose } from "react-icons/ai";

function MessageCard({ profile, closeMessageCard }) {
  const handleSendMessage = () => {};

  return (
    <div className={style.modalContainer}>
      <div className={style.modalContent}>
        <div className={style.modalHeader}>
          <h1>Message</h1>
          <div>
            <AiOutlineClose
              onClick={closeMessageCard}
              className={style.closeIcon}
            />
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="row">
              <div className="col-12 align-baseline">
                <textarea
                  id="message"
                  class="form-control border"
                  rows="4"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
            </div>
          </div>

          <div className={style.modalFooter}>
            <button
              type="button"
              className={`btn btn-primary ${style.saveButton}`}
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MessageCard;
