import React from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaMapMarkerAlt, FaTelegram } from "react-icons/fa";
import "./style.css";

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="head-text">
          <h2>
            <span>Biz Bilan</span> Bog'lanish
          </h2>
          <p>
            {/* Chirchiq davlat pedagogika universiteti biz bilan bog'lanish uchun
            quyidagi manzillarga murojat qiling va ijtimoy tarmoqdagi
            sahifalarimizdan yozing */}
          </p>
        </div>
        <div className="row contact-main">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
            <div className="contact-box">
              <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 contact-col">
                  <div className="col-section">
                    <div className="contact-icons">
                      <MdPhone className="contact-i" />
                    </div>
                    <div className="contact-text">
                      <h6>Telefon</h6>
                      <p>+99870 716-68-05</p>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 contact-col">
                  <div className="col-section">
                    <div className="contact-icons">
                      <MdEmail className="contact-i" />
                    </div>
                    <div className="contact-text">
                      <h6>Elektron Pochta</h6>
                      <p>info@tuit.uz</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="our-address">
                <div className="col-section">
                  <div className="contact-icons">
                    <FaMapMarkerAlt className="contact-i" />
                  </div>
                  <div className="contact-text">
                    <h6>Manzil</h6>
                    <p>
                    Toshkent 100084, Amir Temur shox ko‘chasi 108 uy{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="our-telegram">
                <div className="col-section">
                  <div className="contact-icons">
                    <FaTelegram className="contact-i" />
                  </div>
                  <div className="contact-text">
                    <h6>Telegram</h6>
                    <p>t.me/tvchdpi2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 last-col-contact">
            <div className="our-map">
              <iframe
                title="Chirchiq davlat Pedagogika Instituti"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.5253221710373!2d69.2841541765176!3d41.34093419887466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b534175ed31%3A0x52a8f9d9414a2ad8!2sMuhammad%20al-Xorazmiy%20nomidagi%20Toshkent%20axborot%20texnologiyalari%20universiteti!5e0!3m2!1suz!2s!4v1683892876766!5m2!1suz!2s"
                 width="100%"
                height="300"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
