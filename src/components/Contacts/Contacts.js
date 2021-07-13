import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="left">
        <img src="assets/shake.svg" alt="shake" />
      </div>
      <div className="right">
        <h2>Contacts</h2>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" placeholder="Email" name="email" />
          <textarea placeholder="Your Message..." name="message"></textarea>
          <input type="file" name="file" placeholder="Upload file" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
