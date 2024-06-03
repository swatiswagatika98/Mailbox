
import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import JoditEditor from "jodit-react";
import EmailComposer from "./Components/EmailComposer/EmailComposer";
import "./TextEditor.css";

export default function App() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleEditorChange = (newContent) => {
    setContent(newContent);
  };

  const handleToChange = (event) => {
    setTo(event.target.value);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleEmailBodyChange = (event) => {
    setEmailBody(event.target.value);
  };

  const handleSendEmail = async () => {
    const emailObj = {
      to,
      subject,
      emailBody: content,
    };
    try {
      await setDoc(doc(db, 'sendEmail', to), emailObj);
      alert("Email sent successfully");
    } catch (err) {
      alert("Error sending email: " + err);
      console.log(err);
    }
  };

  return (
    <div className="email-compose">
      <div className="input_span">
        <span className="input_start">To</span>
        <input
          type="text"
          className="input_text"
          onChange={handleToChange}
          value={to}
        />
        <span className="input_end">Cc Bcc</span>
      </div>

      <div className="input_span">
        <input
          type="text"
          placeholder="Subject"
          className="input_text"
          onChange={handleSubjectChange}
          value={subject}
        />
      </div>

      <div className="input_span_body">
        <JoditEditor
          value={content}
          tabIndex={1}
          onChange={handleEditorChange}
        />
      </div>

      <button className="send-button" onClick={handleSendEmail}>
        Send
      </button>
    </div>
  );
}