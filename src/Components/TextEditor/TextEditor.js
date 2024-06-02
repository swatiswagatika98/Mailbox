import React, { useState, useMemo } from "react";
import JoditEditor from "jodit-react";
import './TextEditor.css';

export default function App() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      buttons: "bold,italic,underline,image,fontsize", // Specify the buttons to display
    }),
    []
  );

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

  const handleSendEmail = () => {
    // Implement your logic to send the email here
    console.log("To:", to);
    console.log("Subject:", subject);
    console.log("Email Body:", emailBody);
    console.log("Content:", content);
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
        <input
          type="text"
          placeholder="Write your email"
          className="input_text"
          onChange={handleEmailBodyChange}
          value={emailBody}
        />
      </div>

      <JoditEditor
        value={content}
        config={config}
        tabIndex={1}
        onChange={handleEditorChange}
      />

      <button className="send-button" onClick={handleSendEmail}>
        Send
      </button>
    </div>
  );
}